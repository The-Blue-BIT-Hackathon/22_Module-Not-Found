const bcrypt = require('bcrypt')
const destination = require('../models/destination')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const addReview=async(req,res)=>{

    console.log(req.body);
    res.status(200).json(req.body);
    

         
    //  }
    //  else
    //  {
    //     findcity.
    //  }
}
// const recommedCities=async(req,res)=>{
//     c
// }
module.exports={addReview}