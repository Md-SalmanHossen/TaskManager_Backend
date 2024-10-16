

const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{

   let token=req.headers['token'];
   if (!token) {
      return res.status(401).json({ status: "unauthorized", message: "Token not provided" });
   }

   jwt.verify(token,'1234-xyz',function(err,decodedData){
      
      if(err){
         res.status(401).json({status:"unauthorized",message:"invalid token"});
      }else{

         req.email=decodedData['data'];
         next();

      }
      
   });

}