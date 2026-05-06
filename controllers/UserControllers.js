const mongoose = require('mongoose');
const User = require('../models/UserModel');


const UserRegister = async (req, res) => {
    const { Full_name, email, password, confirm_password } = req.body
    

    const newUser = await User.create({ Full_name, email, password});
    res.status(201).json(newUser);
}

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

module.exports = { UserRegister,getUsers }