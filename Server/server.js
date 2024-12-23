const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const nodemailer = require('nodemailer');
const puppeteer = require("puppeteer");
const connectDB = require('./DB/moongodb');
const multer = require('multer');
const handlebars = require('handlebars');
const User = require('./Models/User');

const bodyParser = require('body-parser');
const { file } = require('pdfkit');
const router = express.Router();
require('./Models/PDF');
const PdfDetail = mongoose.model('PdfDetail');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cookieParser());
const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
};

app.use(cors(corsOptions));
  console.log(process.env.FRONTEND_URL)
app.use(express.json());
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ limit: '60mb', extended: true }));












const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files"); // Ensure the directory exists and is correctly specified
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9); // Ensure unique filenames
    cb(null, uniqueSuffix + "-" + file.originalname); // Append original name for better identification
  },
});

const uploadPdf = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Limit file size to 50 MB
  },
  fileFilter: function (req, file, cb) {
    // Allow only PDF files
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"));
    }
  },
});












const upload = multer({
  limits: { fileSize: 30 * 1024 * 1024 } // 25MB file size limit
});
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
            expires: Date.now() + 600000, 
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




// Resend OTP route
app.post('/api/resend-otp', async (req, res) => {
    const { email } = req.body;

    try {
        const storedData = otpStore.get(email);
        if (!storedData) {
            return res.status(400).json({ message: "No pending verification found" });
        }

        
        const newOTP = generateOTP();
        
       
        otpStore.set(email, {
            ...storedData,
            otp: newOTP,
            expires: Date.now() + 600000
        });

        
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
        
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        
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
                name: user.name, 
                isSarthie: !!sarthieUser,
                additionalInfo: user.additionalInfo || null, 
                class: user.class,
            },
        });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post('/api/getUserData', async (req, res) => {
    const { email, isSarthie } = req.body;
  
    try {
     
      if (!email || typeof isSarthie !== 'boolean') {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      
      const collectionName = isSarthie ? 'students.sarthies' : 'students.nonsarthies';
  
      
      const user = await mongoose.connection.collection(collectionName).findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Send the user data as the response
      res.json(user);
    } catch (err) {
      console.error('Error fetching user data:', err);
      res.status(500).json({ error: 'Server error' });
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

        
        const userData = {
            ...storedData.userData,
            password: hashedPassword,
            isVerified: true,
            bannerImage: 'https://via.placeholder.com/1500x400', 
            profilePicture: 'https://via.placeholder.com/150',  
            phoneNumber: '', 
            bio: ''
        };

        
        const collectionName = userData.isSarthie ? 'students.sarthies' : 'students.nonsarthies';
        const result = await mongoose.connection.collection(collectionName).insertOne(userData);
        
        // Generate token
        const token = jwt.sign(
            { 
                email: userData.email, 
                id: result.insertedId,
                isSarthie: userData.isSarthie 
            },
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

        // Include the token in the JSON response
        res.status(200).json({
            message: "Email verified and user created successfully",
            user: {
                id: result.insertedId,
                email: userData.email,
                name: userData.name,
                isSarthie: userData.isSarthie,
                class: userData.class,
                bannerImage: userData.bannerImage,
                profilePicture: userData.profilePicture,
                phoneNumber: userData.phoneNumber, 
                bio: userData.bio 
            },
            token: token 
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
      
     
      otpStore.set(email, {
          ...storedData,
          otp: newOTP,
          expires: Date.now() + 600000
      });

      
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
              name: user.name, 
              isSarthie: !!sarthieUser, 
              additionalInfo: user.additionalInfo || null, 
              class: user.class,
          },
      });

  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});



app.post("/api/send-analyze-email", upload.single('screenshotImage'), async (req, res) => {
try {
  
  const emails = JSON.parse(req.body.emails);
  const analysisDetails = JSON.parse(req.body.analysisDetails);
  const summaryQuestions = JSON.parse(req.body.summaryQuestions);

 
  if (!emails || !req.file) {
    return res.status(400).json({ error: "Email and screenshot are required." });
  }

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD 
    },
  });

  
  const emailTemplate = handlebars.compile(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; }
        .analysis-container { 
          border: 1px solid #e0e0e0; 
          padding: 20px; 
          border-radius: 8px; 
        }
        .summary-table { 
          width: 100%; 
          border-collapse: collapse; 
        }
        .summary-table th, .summary-table td { 
          border: 1px solid #e0e0e0; 
          padding: 10px; 
          text-align: left; 
        }
      </style>
    </head>
    <body>
      <div class="analysis-container">
        <h1>Exam Analysis Report</h1>
        <p>Subject: {{subject}} | Lesson: {{lesson}}</p>

        <div>
          <h3>Performance Summary</h3>
          <p>Total Questions: {{totalQuestions}}</p>
          <p>Correct Answers: {{correctAnswers}} ({{correctPercentage}}%)</p>
          <p>Incorrect Answers: {{incorrectAnswers}} ({{incorrectPercentage}}%)</p>
          <p>Score: {{score}} / {{totalMarks}} ({{scorePercentage}}%)</p>
        </div>

        <h3>Detailed Question Analysis</h3>
        <table class="summary-table">
          <thead>
            <tr>
              <th>Q.No</th>
              <th>Question</th>
              <th>Your Answer</th>
              <th>correct Answer</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {{#each summaryQuestions}}
            <tr>
              <td>{{questionNumber}}</td>
              <td>{{question}}</td>
              <td>{{selectedOption}}</td>
              <td>{{answer}}</td>     
              <td>{{#if isCorrect}}{{Marks}}/{{Marks}}{{else}}0/{{Marks}}{{/if}}</td>
            </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `);

 
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emails,
    subject: "Exam Analysis Report",
    html: emailTemplate({
      ...analysisDetails,
      scorePercentage: ((analysisDetails.score / analysisDetails.totalMarks) * 100).toFixed(1),
      summaryQuestions
    }),
    attachments: [
      {
        filename: 'full-analysis.jpg',
        content: req.file.buffer,
        contentType: 'image/jpeg'
      }
    ]
  };

  
  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: "Analysis sent successfully!" });
} catch (error) {
  console.error("Error sending email:", error);
  res.status(500).json({ error: "Failed to send the email." });
}
});






app.post("/upload-pdf", uploadPdf.single("file"), async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).json({ message: "No file uploaded!" });
      }

      const { title, description, subject, lesson, userId } = req.body;

      // Validate required fields
      if (!title || !description || !subject || !lesson || !userId) {
          return res.status(400).json({ message: "All fields, including userId, are required!" });
      }

      
      const existingFile = await PdfDetail.findOne({ 
          $or: [{ pdf: req.file.filename }, { title: title }]
      });

      if (existingFile) {
          return res.status(400).json({ message: "A file with the same name or title already exists!" });
      }

      // Create a new document
      const newPdf = new PdfDetail({
          pdf: req.file.filename,
          title,
          description,
          subject,
          lesson: lesson,
          uploadedBy: userId, 
      });

      // Save to MongoDB
      await newPdf.save();

      res.status(200).json({
          message: "File uploaded successfully and details saved to database!",
          fileDetails: req.file,
      });
  } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ message: "Error uploading file", error: error.message });
  }
});


app.get('/user-pdfs/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch all PDFs uploaded by the user from the database
    const pdfDetails = await PdfDetail.find({ userId });

    if (!pdfDetails || pdfDetails.length === 0) {
      return res.status(404).json({ message: 'No PDFs found for this user.' });
    }

    // Map the PDFs to include the file URL for access
    const pdfsWithUrls = pdfDetails.map(pdf => ({
      title: pdf.title,
      description: pdf.description,
      subject: pdf.subject,
      length: pdf.length,
      fileUrl: `http://localhost:8000/files/${pdf.pdf}`, // URL to access the file
    }));

    res.status(200).json({
      message: 'User PDFs retrieved successfully',
      pdfs: pdfsWithUrls,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PDFs', error: error.message });
  }
});

// Endpoint to serve a specific file
app.get('/files/:filename', function (req, res) {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'files', filename);
  
  res.sendFile(filePath);
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});