const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/signup",async(req,res)=>{
  try {
    const myPlaintextPassword = req.body.password;
    const hash = bcrypt.hashSync(myPlaintextPassword, Number(process.env.SALT_ROUNDS));
    await UserModel.create({...req.body , password:hash});
    res.status(201).json({ msg: "Signup Sucess" });
  } catch (error) {
    res.send(error)
  }
})

userRouter.post("/login",async (req,res)=>{
  const user = await UserModel.findOne({email:req.body.email})
try {
  if(!user){
    res.status(503).json({ msg: "User Not found, please Signup" });
  }else{
    const myPlaintextPassword = req.body.password;
    const hash = user.password
    await bcrypt.compareSync(myPlaintextPassword, hash);

    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECERT_KEY,
      { expiresIn: "2D" }
    );
   

    res.json({ msg: "Login Sucess..." ,accessToken , userId:user._id , role:user.role});
  }
} catch (error) {
  res.send(error)
}
  
  
})


module.exports = userRouter;