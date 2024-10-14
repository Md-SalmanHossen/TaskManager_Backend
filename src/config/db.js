
const mongoose=require('mongoose');
const dotenv =require('dotenv');

const ConnectedDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongoose connected....');
    }catch(err){
        console.error('MongoDB connection error:',err);
        process.exit(1);
    }
}
module.export=ConnectedDb;