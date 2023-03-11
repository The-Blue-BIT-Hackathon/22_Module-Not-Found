const mongoose=require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://admin:TqSkxJFeoEGIvOww@cluster0.puzkxcx.mongodb.net/travel",(err)=>
// mongoose.connect("mongodb+srv://admin:Js25qlxouv5ZIi0U@cluster0.urkacxd.mongodb.net/InstaClone",(err)=>
{
    if(!err)
        console.log("Mongodb Connection Succeeded...");
    else
        console.log("Connection Error: "+JSON.stringify(err,undefined,2));
    
});

module.exports=mongoose;