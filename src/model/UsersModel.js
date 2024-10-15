
const mongoose=require('mongoose');

const DataBaseSchema=mongoose.Schema({
   email:{
      type:String,
      required:true
   },
   lastName:{
      type:String,
      required:true
   },
   mobileNumber:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   }
},{versionKey:false});


const UserModel=mongoose.model('users',DataBaseSchema);

module.exports=UserModel;