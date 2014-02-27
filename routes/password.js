// Get all of our friend data
var data = require('../data.json'); 

exports.changePassword = function(req, res){
	var oldPass = req.query.oldpass;
    var newPass = req.query.newpass;
    
    console.log(oldPass);
    console.log(newPass);
    
    
    
	res.render('password', data);
}


exports.changePassword = function(req, res) {

	var roommateID = req.session.roommateID;
	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
<<<<<<< HEAD
    
    console.log(newpassword);
    console.log(oldpassword);
    
    
            data.Roommates[roommateID].password = newpassword;
            console.log(data.Roommates[roommateID].password);
        /*}
        else{
            //console log error message
        }*/
=======
	console.log("pw1 " + newpassword + " pw 2 " + oldpassword);
		data.Roommates[roommateID].password = newpassword;
>>>>>>> f9f03b699d17f3db16adaa80eb069311a6e95d39
        res.render('password',data);

}
