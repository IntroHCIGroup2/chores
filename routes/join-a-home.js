// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('join-a-home', data);
};

exports.homelogin = function(req,res){
	var roommate = req.query;
    var inputtedhome = req.query.home;
	var inputtedpassword = req.query.password;
    
	for (var i = 0; i < data.Roommates.length;i++){
		if(roommate.home == inputtedhome && roommate.homepassword == inputtedpassword ) {
            res.render('home',data); //.Roommates[req.session.roommateID]
		}	
        else { 
        //  login error page res.render
        }
	}

	res.render('index');
}