// Get all of our friend data
var data = require('../data.json');

exports.changePassword = function(req, res){
	var oldPass = req.query.oldpass;
    var newPass = req.query.newpass;
    
    console.log(oldPass);
    console.log(newPass);
    
    
    
	res.render('password', data);
};