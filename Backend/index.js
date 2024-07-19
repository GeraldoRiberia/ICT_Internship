// Importing Express
var express = require ('express');
// Initialization
var app = express();

// api connection
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/login",(req,res)=>{
    res.send("Welcome To Login Page")
})


// connecting to port
app.listen(3000,()=>{
    console.log("Port is up and running!")
})

// to run node <filename>