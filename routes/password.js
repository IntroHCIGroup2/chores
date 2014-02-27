// Get all of our friend data
var data = require('../data.json'); 

exports.view = function(req, res){
	res.render('password', data);
}


exports.changePassword = function(req, res) {

	var roommateID = req.session.roommateID;
	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
    
    console.log(newpassword);
    console.log(oldpassword);
    
    
            data.Roommates[roommateID].password = newpassword;
            console.log(data.Roommates[roommateID].password);
        /*}
        else{
            //console log error message
        }*/
        res.render('password',data);

}
