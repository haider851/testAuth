var mongoose = require('mongoose');
var authSchema = mongoose.Schema({
    name : {
        type : String
    },
    username:{
        type : String,
        require :true
    },
    password : {
        type : String,
        require : true
    },
    token : {
        type : String
    }

});
mongoose.model('Auth',authSchema);