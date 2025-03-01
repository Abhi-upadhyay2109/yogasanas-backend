const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{type:String,reuired:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    totalAsanas: { type: Number, default: 0 },
    role:{type:String, enum:["user", "admin"], default:"user"}
  },
  {versionKey:false}

);


const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;