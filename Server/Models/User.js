const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isSarthie: { type: String, default: false }, // True for Sarthie, False for non-Sarthie
}, { timestamps: true });



const User = mongoose.model('User', userSchema);

module.exports = User;