require("dotenv").config()
const cors= require("cors") 
const express= require("express")
const ConnectDB = require("./database/db")
const route  = require("./routes/user-route")
const app= express()
const PORT=process.env.PORT||8000
app.use(cors())
app.use(express.json())
app.use("/api/user", route)
ConnectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`The Server is running on Port ${PORT}`)
    })
})
 