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
app.post('/api/signin', async (req, res) => {
    const { email, password, name, isSarthie } = req.body;

    try {
        if (!email || !password || !name || isSarthie === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Determine the collection based on `isSarthie`
        const collectionName = isSarthie ? 'students.sarthies' : 'students.nonsarthies';
        const user = new User({
            name,
            email,
            password: hashedPassword,
            isSarthie
        });

        // Save user to the correct collection
        await mongoose.connection.collection(collectionName).insertOne(user);

        // Generate token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send token as cookie
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        res.status(201).json({ message: "User created successfully", user });

    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});