const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isSarthie: { type: Boolean, required: true },
    className: { type: String, required: true }, // Change 'class' to 'className'
});

module.exports = mongoose.model('User', UserSchema);