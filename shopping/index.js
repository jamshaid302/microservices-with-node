const express = require("express");
const app=express();
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const shopping = require("./controller/shopping");
app.use('/shopping',shopping);

app.listen(process.env.PORT,function (){
    console.log("listening at "+ process.env.PORT || 3001)
})
