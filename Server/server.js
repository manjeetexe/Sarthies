const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

// Sign-up route
app.post('/api/signup', async (req, res) => {
    const { email, password, name, isSarthie, class: userClass } = req.body;



    console.log("Request Body:", req.body);
    try {
        // Validate the required fields
        if (!email || !password || !name || isSarthie === undefined || !userClass) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the class is within the allowed range (optional validation)
        const allowedClasses = ['7', '8', '9', '10']; // Adjust as needed
        if (!allowedClasses.includes(userClass)) {
            return res.status(400).json({ message: "Invalid class provided" });
        }

        // Check if the user already exists
        const existingUserInSarthies = await mongoose.connection.collection('students.sarthies').findOne({ email });
        const existingUserInNonSarthies = await mongoose.connection.collection('students.nonsarthies').findOne({ email });

        if (existingUserInSarthies || existingUserInNonSarthies) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Determine the collection based on `isSarthie`
        const collectionName = isSarthie ? 'students.sarthies' : 'students.nonsarthies';

        // Create new user object
        const user = {
            name,
            email,
            password: hashedPassword,
            isSarthie,
            class: userClass // Add the class here
        };

        // Save user to the correct collection
        await mongoose.connection.collection(collectionName).insertOne(user);

        // Generate token
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the token as a cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.status(201).json({ message: "User created successfully", user });

    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal Server Error" });
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