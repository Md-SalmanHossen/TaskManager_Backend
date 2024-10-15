
const mongoose=require('mongoose');

const DataBaseSchema=mongoose.Schema({
   email:{
      type:String,
      required:true
   },
   firstName:{
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
},{timestamps:true,versionKey:false});

//first one is collection name and 2nd one is schema model name
const UserModel=mongoose.model('users',DataBaseSchema);

module.exports=UserModel;