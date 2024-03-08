const mongoose= require("mongoose")
const url= process.env.MONGO_URL
const ConnectDB= async()=>{
    try {
        const connect= await mongoose.connect(url)
        console.log("Connection is successfull with data base")
    } catch (error) {
        console.log("The Error in connecting with data base is", error.message)
    }
}
module.exports= ConnectDB