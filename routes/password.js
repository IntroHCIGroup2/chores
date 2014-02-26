// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('password', data);
}


exports.changePassword = function(req, res) {

	var roommateID = req.session.roommateID;
	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
    
        if(oldpassword == data.Roommates[roommateID].password){
            data.Roommates[roommateID].password = newpassword;
        }
        else{
            //console log error message
        }
        res.render('password',data);

}
