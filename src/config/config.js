
const dotenv=require('dotenv');

//Load environment variables
dotenv.config();

const PORT=process.env.PORT||5000;

module.exports={PORT};