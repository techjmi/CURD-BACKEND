const mongoose= require("mongoose")
const addSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
//create model
const User=mongoose.model("User", addSchema)
module.exports= User