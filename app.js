var express = require('express');
var app = express();
var session = require('express-session');
var router = require('./api/routers');
app.use('/api',router);
app.listen('3000',()=>{
    console.log("Server start");
})