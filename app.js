

//file require
const router=require('./src/route/Api');



//package import
const express=require('express');
const app=new express();

const helmet=require('helmet');
const hpp=require('hpp');
const bodyParser=require('body-parser');
const rateLimit=require('express-rate-limit');
const cors=require('cors');



//Middleware Setup
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(bodyParser.json());

const rateLimiter=rateLimit({
   window:15*60*1000,
   max:100
})
app.use(rateLimiter)



module.exports=app;
