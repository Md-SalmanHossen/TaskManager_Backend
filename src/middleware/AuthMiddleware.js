

const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{

   let token=req.header['token'];

   jwt.verify(token,'1234-xyz',function(err,decodedData){
      
      if(err){
         res.status(401).json({status:"unauthorized"});
      }else{

         req.header.email=decodedData['email'];
         next();

      }
      
   });

}