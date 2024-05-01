const mongoose=require("mongoose");
const authschema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
},{timestamps:true},)

const Auth= mongoose.model("Auth",authschema);

module.exports=Auth;