var data = require('../data.json');

exports.view = function(req, res){
	var user = req.session.roommateID;
	if(!req.session.roommateID || req.session.roommateID == -1){
		res.render('./index');
	}
	console.log(req.session.roommateID);
	res.render('userprofile',data.Roommates[user]);
};