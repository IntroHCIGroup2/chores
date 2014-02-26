// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	if(!req.session.roommateID || req.session.roommateID == -1){
		res.render('./index');
	}
	res.render('current-chore',data);
};