const mongoose=require('mongoose');

const destSchema=new mongoose.Schema(
    {
        cityName:{
            type:String,
            required:true,

        },
        username:{
            type:String,
            required:true,
        },
        review:{
            type:String,
    
        },
        rating:
        {
            type:Number,
        },

    
    
    

    },
    {timestamps:true}
);


module.exports=mongoose.model('destinations',destSchema);