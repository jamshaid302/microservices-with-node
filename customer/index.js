const express = require("express");
const app=express();
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const customer = require("./controller/customer");
app.use('/customer',customer);

app.listen(process.env.PORT,function (){
    console.log("listening at "+ process.env.PORT || 3001)
})
