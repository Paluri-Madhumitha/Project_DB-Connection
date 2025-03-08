//import mongoose package
const mongoose = require('mongoose')
//mongodb connection uri
const uri = 'mongodb://localhost:27017/crowd-funding_db'
//connect to mongodb
const connectDB = async()=>{
    try{
        //connect to the mogodb using mongoose
        const conn=await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true})
        console.log('mongodb connected to: ',conn.connection.host);
    }
    catch(error){
        console.error('error connecting to mongodb:',error.message);
    }}
    module.exports=connectDB;
