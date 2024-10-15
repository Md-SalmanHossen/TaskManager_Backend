

//file require
const router=require('./src/route/Api');
const ConnectedDb=require('./src/config/db');


//package import
const express=require('express');
const app=new express();

const helmet=require('helmet');
const hpp=require('hpp');
const bodyParser=require('body-parser');
const rateLimit=require('express-rate-limit');
const cors=require('cors');



//before firstly security must setup cors origin so that in can call multiple sited
app.use(cors());


//Security implement :helmet>hpp>express.json()>express.urlencoded>express-rate-limiter
app.use(helmet());
app.use(hpp());
app.use(express.json('20mb'));
app.use(express.urlencoded({extended:true}));

const Limiter=rateLimit({
   windowMs:15*60*1000,
   max:3000
});
app.use(Limiter)

app.use(bodyParser.json());



//Database Connected after security
ConnectedDb;



//route implement after db connected
app.use('/api',router);

// Handle undefined routes
app.use('*',async (req,res)=>{
   res.status(404).json({data:"Not Found"})
});




module.exports=app;
