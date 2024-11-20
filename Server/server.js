const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
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

app.get('/', (req, res)=> {
    res.send('welcome');
});

app.post('/api/signin', async (req, res) => {
    const { email, password, name, isSarthie } = req.body;


    

    try {
        // Check if a user with the given email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        bcrypt.genSalt(10,(err, salt)=>{
            bcrypt.hash(password,salt ,async (err,hash) => {

                const LoginUser = await User.create({ email:email, password: hash, name:name, isSarthie:isSarthie });
                
                let token = jwt.sign({ email},"jfhjfdd")
                res.cookie("token", token)

                res.status(201).json({ message: "User created successfully", user: LoginUser });
    
            });
        })
        
       
        
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});