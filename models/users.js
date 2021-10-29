const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true, 
        // minlength: 3,
        // maxlength: 20
    },
    password: {
        type: String,
        // required: true,
        // minlength: 3,
        // maxlength: 20
    }
});


UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema)

module.exports = { User }