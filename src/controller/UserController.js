//model import
const UsersModel=require('../model/UsersModel');
const jwt=require('jsonwebtoken');


exports.registration=async(req,res)=>{
   try {

      let reqBody=req.body;
      await UsersModel.create(reqBody);
      res.json({status:"success",message:"Registration Completed"})
   } catch (error) {
      res.json({status:"fail",message:error.message});
   }
}


exports.login=async(req,res)=>{
   try {
      
      let reqBody=req.body;
      let userCount=await UsersModel.find(reqBody);
      
      if(userCount.length>0){

         //jwt token
         let PayLoad={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
         let token=jwt.sign(PayLoad,"1234-xyz");
         res.json({status:"success",message:"User Found",token:token})

      }else{ 
         res.json({status:"fail",message:"No User Found"})
      }

      res.json({status:"success",message:userCount});

   } catch (error) {
      
   }
}

exports.profileUpdate=async(req,res)=>{

}

exports.profileDetails=async(req,res)=>{

}

exports.verifyEmail=async(req,res)=>{

}

exports.verifyOTP=async(req,res)=>{

}

exports.passwordReset=async(req,res)=>{

}

exports.signOut=async(req,res)=>{

}
