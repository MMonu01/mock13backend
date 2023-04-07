const express = require("express")
const {AppointModel} = require("../models/AppointModel")
const { UserModel } = require("../models/UserModel")

const AppointRouter = express.Router()


AppointRouter.get("/",async(req,res)=>{
  const query = req.query
const UserId = req.body.UserId
  const posts =  await DeviceModel.find({UserId,device:query.device})
res.send(posts)
})



AppointRouter.post("/create",async(req,res)=>{
  try{

    const device= new DeviceModel(req.body)
await device.save()

res.send("Device has been posted")
  }
  catch(err){
    console.log(err)
    res.send("something went wrong")
  }

})







module.exports = {AppointRouter}