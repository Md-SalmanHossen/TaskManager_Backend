

const mongoose=require('mongoose');

const DataBaseSchema=mongoose.Schema({
   email:{
      type:String,
      required:true
   },
   otp:{
      type:String,
      required:true
   },
   status:{
      type:String,
      required:true
   },
   create
},{timestamps:true,versionKey:false});

//first one is collection name and 2nd one is schema model name
const TasksModel=mongoose.model('tasks',DataBaseSchema);

module.exports=TasksModel;