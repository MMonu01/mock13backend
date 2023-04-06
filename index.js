const express = require("express")
const connection = require("./configs/db")
const cors = require("cors")
require("dotenv").config()
const {UserRouter} = require("./routes/UserRouter")
const {AppointRouter} = require('./routes/AppointRroutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use("/users",UserRouter)
app.use("/posts",AppointRouter)


app.listen(process.env.port,async()=>{

    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
        console.log("can not connect")
    }
})