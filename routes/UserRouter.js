const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {UserModel} = require("../models/UserModel")


const UserRouter = express.Router()


UserRouter.post("/register",async(req,res)=>{
   const {name,email,gender,password,age,city} = req.body

   const UserEmail = await UserModel.find({email})

   try{

    if(UserEmail.length>0){
res.send("User already exist, please login")
    }
    else{

        
        bcrypt.hash(password, 5, async(err, hash) =>{
       if(hash){
const user = new UserModel({name,email,gender,password:hash,age,city})
await user.save()
res.send("user is registered")
       }
       else{
        console.log(err)
        console.log("Error on registering")
    }
});
}

   }
   catch(err){
    console.log(err)
    res.send("something went wrong")
   }

})





UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body

    const user = await UserModel.findOne({email})
// res.send(user)
    try{
if(user.email!==email){
    res.send("Wrong Credentialsjojsosj")
}
else{
    bcrypt.compare(password, user.password, (err, result) =>{
        // result == false
        if(result){
let token = jwt.sign({UserId:user._id},"brain")
res.send({msg:"login Successfull",token})
        }
        else{
console.log(err)
res.send("Wrong Credentials")
        }
    });
}

    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }


})











module.exports = {UserRouter}