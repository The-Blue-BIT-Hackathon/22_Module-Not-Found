const router = require('express').Router();
const User = require('../models/users');
const {register,login}=require('../controllers/appController')
const bcrypt = require('bcrypt')


//REGISTER
router.post('/register', register);
//LOGIN
router.post("/login", login);
module.exports = router
