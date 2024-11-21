const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] },
    password: { type: String, required: true },
    isSarthie: { type: Boolean, default: false }, // True for Sarthie, False for non-Sarthie
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;