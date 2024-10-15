
//Load environment variables from .env file
require('dotenv').config();
const nodemailer=require('nodemailer');


const SendEmailUtility=async(EmailTo,EmailText,EmailSubject)=>{

   let transporter=nodemailer.createTransport({
      host:process.env.EMAIL_HOST,
      port:process.env.EMAIL_PORT,
      auth:{
         user:"process.env.EMAIL_HOST",
         pass:`process.env.EMAIL_PASS`
      },tls:{
         rejectUnauthorized:false
      }
   });

   let mailOption={
      form:process.env.EMAIL_FROM,
      to:EmailTo,
      subject:EmailSubject,
      text:EmailText
   }

   return await transporter.sendMail(mailOption);
}

module.exports=SendEmailUtility;