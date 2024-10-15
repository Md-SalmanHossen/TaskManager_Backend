
const dotenv=require('dotenv');
dotenv.config();


const app=require('./app');
const {PORT}=require('./src/config/config');


//Start Server
app.listen(PORT,()=>{
   console.log(`Server running on port ${PORT}`)
});


