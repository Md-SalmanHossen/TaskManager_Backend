
const ConnectedDB=require('./src/config/db');
const app=require('./app');
const {PORT}=require('./src/config/config');

//Connected to MongoDb
ConnectedDB();


//Start Server
app.listen(PORT,()=>{
   console.log(`Server running on port ${PORT}`)
});


