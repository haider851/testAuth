var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/auth';

mongoose.connect(dburl);
mongoose.connection.on('connected',function(){
    console.log("Database Successfull Start");
})
mongoose.connection.on('disconnected',function(err){
    if(err){
        console.log("Database not Connected",err);
    }
})

require('./model');
