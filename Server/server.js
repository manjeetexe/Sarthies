const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const connectDB = require('./DB/moongodb');
const User = require('./Models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Store OTPs temporarily (In production, use Redis or database)
const otpStore = new Map();

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP email
async function sendVerificationEmail(email, otp) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification for Your Account',
        html: `
            <h2>Email Verification</h2>
            <p>Your verification code is: <strong>${otp}</strong></p>
            <p>This code will expire in 10 minutes.</p>
        `
    };
    
    return transporter.sendMail(mailOptions);
}

// Sign-up route
app.post('/api/signup', async (req, res) => {
    const { email, password, name, isSarthie, class: userClass } = req.body;

    try {
        // Validate the required fields
        if (!email || !password || !name || isSarthie === undefined || !userClass) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate class
        const allowedClasses = ['7', '8', '9', '10'];
        if (!allowedClasses.includes(userClass)) {
            return res.status(400).json({ message: "Invalid class provided" });
        }

        // Check existing user
        const existingUserInSarthies = await mongoose.connection.collection('students.sarthies').findOne({ email });
        const existingUserInNonSarthies = await mongoose.connection.collection('students.nonsarthies').findOne({ email });

        if (existingUserInSarthies || existingUserInNonSarthies) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // Generate and store OTP
        const otp = generateOTP();
        otpStore.set(email, {
            otp,
            expires: Date.now() + 600000, // 10 minutes
            userData: {
                name,
                email,
                password,
                isSarthie,
                class: userClass,
                isVerified: false
            }
        });

        // Send verification email
        await sendVerificationEmail(email, otp);

        res.status(200).json({ 
            message: "Please check your email for verification code",
            email: email 
        });

    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Verify OTP route
app.post('/api/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const storedData = otpStore.get(email);
        
        if (!storedData) {
            return res.status(400).json({ message: "OTP expired or not found" });
        }

        if (storedData.expires < Date.now()) {
            otpStore.delete(email);
            return res.status(400).json({ message: "OTP has expired" });
        }

        if (storedData.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(storedData.userData.password, salt);

        // Create user with verified status
        const userData = {
            ...storedData.userData,
            password: hashedPassword,
            isVerified: true
        };

        // Save to appropriate collection
        const collectionName = userData.isSarthie ? 'students.sarthies' : 'students.nonsarthies';
        const result = await mongoose.connection.collection(collectionName).insertOne(userData);

        // Generate token
        const token = jwt.sign(
            { email: userData.email, id: result.insertedId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Clean up OTP
        otpStore.delete(email);

        // Set cookie and respond
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.status(200).json({
            message: "Email verified and user created successfully",
            user: {
                id: result.insertedId,
                email: userData.email,
                name: userData.name,
                isSarthie: userData.isSarthie,
                class: userData.class
            }
        });

    } catch (error) {
        console.error("Error during OTP verification:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Resend OTP route
app.post('/api/resend-otp', async (req, res) => {
    const { email } = req.body;

    try {
        const storedData = otpStore.get(email);
        if (!storedData) {
            return res.status(400).json({ message: "No pending verification found" });
        }

        // Generate new OTP
        const newOTP = generateOTP();
        
        // Update stored data with new OTP and expiration
        otpStore.set(email, {
            ...storedData,
            otp: newOTP,
            expires: Date.now() + 600000
        });

        // Send new verification email
        await sendVerificationEmail(email, newOTP);

        res.status(200).json({ message: "New verification code sent" });

    } catch (error) {
        console.error("Error resending OTP:", error);
        res.status(500).json({ message: "Failed to resend verification code" });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        // Check if user exists in both collections
        const sarthieUser = await mongoose.connection.collection('students.sarthies').findOne({ email });
        const nonSarthieUser = await mongoose.connection.collection('students.nonsarthies').findOne({ email });

        const user = sarthieUser || nonSarthieUser;

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id, isSarthie: !!sarthieUser }, // `isSarthie` true if user is from Sarthies
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Set the token in a cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        // Send user data along with the token
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name, // Include other relevant fields from your user schema
                isSarthie: !!sarthieUser, // Distinguish between Sarthies and non-Sarthies
                additionalInfo: user.additionalInfo || null, 
                class: user.class,// Example for other data fields
            },
        });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});