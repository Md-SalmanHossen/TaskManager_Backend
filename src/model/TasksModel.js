
const mongoose=require('mongoose');

const DataBaseSchema=mongoose.Schema({
   title:{
      type:String,
      required:true
   },
   description:{
      type:String,
      required:true
   },
   status:{
      type:String,
      required:true
   },
},{timestamps:true,versionKey:false});

//first one is collection name and 2nd one is schema model name
const TasksModel=mongoose.model('tasks',DataBaseSchema);

module.exports=TasksModel;