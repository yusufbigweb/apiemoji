const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.listen(3000, ()=>{
    console.log("server running port: 3000");
})

app.get('/', (req,res)=>{
    res.send("Hello Server!")
})


mongoose.connect("mongodb+srv://yusufayan916_db_user:4pTxKx2UYVscKbab@apicall.0zvqxhd.mongodb.net/Backend?appName=apicall")
.then(()=>{
    console.log("conneted database succfully!")
})
.catch(()=>{
    console.log("database connetion failed!")
})


