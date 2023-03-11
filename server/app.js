require('./connection')

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()
const authRoute=require('./routes/auth')

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
const axios = require('axios')
const CookieParser = require('cookie-parser')

app.use(CookieParser());


app.get('/',(req,res)=>{
    
    res.send({username:'mangesh'});
})
app.use('/travel/auth',authRoute);



app.listen(5000, () => {
    console.log("App is listening at port 5000...");
});
