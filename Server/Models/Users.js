const mongoose = require('mongoose');


let userdata = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String
})

let users = mongoose.model('users', userdata);


module.exports = { users }