//model import
const UsersModel=require('../model/UsersModel');

exports.registration=async(req,res)=>{
   try {

      let reqBody=req.body;
      await UsersModel.create(reqBody);
      res.json({status:"success",message:"Registration Completed"})
   } catch (error) {
      res.json({status:"fail",message:err});
   }
}


exports.login=async(req,res)=>{
   
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
