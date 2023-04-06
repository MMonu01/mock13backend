const mongoose = require("mongoose")

const deviceSchema = mongoose.Schema({
name:String,
Image:String,
specialization:String,
experience:String,
date:String,
slots:Number,
fee:Number
})



const AppointModel = mongoose.model("device",deviceSchema)

module.exports = {AppointModel}