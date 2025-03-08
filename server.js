const express=require('express')
const connectDB=require('./config/db');
const app=express();
//connect to mongodb
connectDB();
//middleware to parseJson data
app.use(express.json());
//define a simple routes
app.get("/",(req,res)=>{
    res.send("Hello from express,crowdfunding platform backend is running");
})
//set the port
const PORT=3000;
//start the server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})