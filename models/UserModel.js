const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    Full_name: String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    confirm_password:String
}, { timestamps: true })


const User = mongoose.model("User", UserSchema);
module.exports = User;

