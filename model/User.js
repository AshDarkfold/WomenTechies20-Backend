const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required: true,
    min: 6,
    max: 255
  },
  email:{
    type:String,
    required:true,
    min:6,
    max:255
  },
  regNo:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    min:8,
    max:1024
  }
});

module.exports=mongoose.model("Users",userSchema);
