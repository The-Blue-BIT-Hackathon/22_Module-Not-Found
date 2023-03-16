const bcrypt = require('bcrypt')
const destination = require('../models/destination')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const addReview=async(req,res)=>{

    console.log(req.body);
    res.status(200).json(req.body);
    //  const findcity = await destination.findOne({ cityName: req.body.location });
    //  if(findcity==NULL||findcity==undefined)
    //  {
    //     const city = new destination({
    //         cityName: req.body.location,
    //       });  
    //         const dest_city=await city.save()
    //       const rev_data={};
    //       rev_data['name']=req.body.name;
    //       rev_data['review']=req.body.review;
    //       rev_data['rating']=req.body.rating;

    //      dest_city.updateOne({ $push: { review: rev_data } });

         
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