const mongoose = require('mongoose');

const PdfDetailsSchema = new mongoose.Schema({
    pdf: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    subject: { type: String, required: true },
    lesson: { type: String, required: true },
    date: { type: Date, default: Date.now },
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to a user
        ref: 'User', // Assumes a User model exists
        required: true 
    }
}, { collection: 'pdfDetails' });

mongoose.model('PdfDetail', PdfDetailsSchema);