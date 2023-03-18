const router = require('express').Router();
const User = require('../models/users');
const {trainSchedules}=require('../controllers/appController')
const bcrypt = require('bcrypt')


//REGISTER
router.post('/getTrainSchedules/:srcCity/:destCity', trainSchedules);
//LOGIN
// router.post("/login", login);
module.exports = router
