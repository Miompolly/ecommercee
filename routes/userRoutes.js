
const express = require('express');
const Router = express.Router();

const { UserRegister, getUsers } = require('../controllers/UserControllers');


Router.post('/register', UserRegister);
Router.get('/list', getUsers);


module.exports = Router;
