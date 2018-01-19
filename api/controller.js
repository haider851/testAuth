
var twoFactor = require('node-2fa');


var genrateToken = function (){
    return twoFactor.generateToken('ahIZoaAdGGYHzWLnEVaitHKUynodXyKO');
}

module.exports.auth = function(req,res){
    var finalToken = parseInt(genrateToken().token)
    res.json(finalToken);
}
module.exports.authTest = function(req,res){
var id = req.params.id;

var  code = parseInt(genrateToken().token);
if(code==id){
        res.json("Successfull Authenticate");
}
else{
    res.json("Invalid OTP");
}
}
setTimeout(genrateToken , 500);
module.exports.register = function(req,res){
}
