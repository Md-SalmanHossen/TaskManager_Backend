
//own file import
const UserController=require('../controller/UserController.js');
const AuthVerifyMiddleware=require('../middleware/AuthMiddleware.js')

//package import
const express=require('express');
const router=express.Router();


//api implement

router.post('/registration',UserController.registration);
router.post('/login',UserController.login);

//after login 
router.get('/profileDetails',AuthVerifyMiddleware,UserController.profileDetails);
router.post('/profileUpdate',AuthVerifyMiddleware,UserController.profileUpdate);

router.get('/RecoverVerifyEmails/:email',UserController.verifyEmail);
router.get('/RecoverVerifyOTP:email/:otp',UserController.verifyOTP);
router.get('/RecoverPassword/:otp/:password',UserController.passwordReset);





module.exports=router;