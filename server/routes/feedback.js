const router = require('express').Router();
const User = require('../models/users');
const {addReview}=require('../controllers/destController')
const bcrypt = require('bcrypt')


//REGISTER
router.post('/addReview', addReview);
//LOGIN
router.post("/login", login);
module.exports = router
