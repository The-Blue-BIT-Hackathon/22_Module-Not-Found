const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:50,
        unique:true
    },
    firstName:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    email:
    {
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        min:6
    },
    profileImage:{
        // data:Buffer,
        Type:String,
    },
    
},
{timestamps:true}

)

module.exports=mongoose.model('User',UserSchema);