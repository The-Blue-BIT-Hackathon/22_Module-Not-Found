const mongoose=require('mongoose');

const destSchema=new mongoose.Schema(
    {
        cityName:{
            type:String,
            required:true,

        },
        review:{
            type:Array,
            default:[]
        },
        score:{
            type:Number,
            default:0
        },
    

    },
    {timestamps:true}
);


module.exports=mongoose.model('destinations',destSchema);