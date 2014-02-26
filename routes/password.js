// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('password', data);
}


exports.changePassword = function(req, res) {

	var roommateID = req.session.roommateID;
	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
	console.log("pw1 " + newpassword + " pw 2 " + oldpassword);
		data.Roommates[roommateID].password = newpassword;
        res.render('password',data);

}
