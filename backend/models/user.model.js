const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    names: String,
    email: String,
    phonenumber: Number,
    nationalID: Number,
    password: String
})

const User =mongoose.model('users', userSchema);

module.exports = User;