
const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
const hpp=require('hpp');
const rateLimit=require('express-rate-limit');
const bodyParser=require('body-parser');

const app=express();


//Middleware Setup
app.use(cors());
app.use(helmet())
app.use(hpp());
app.use(bodyParser.json())

const rateLimiter=rateLimit({
   window:15*60*1000,
   max:100
})
app.use(rateLimiter)



module.exports=app;
