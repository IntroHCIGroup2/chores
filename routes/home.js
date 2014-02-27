var data = require("../data.json");

exports.view = function(req, res) { 
	var user = req.session.roommateID;
	if(!req.session.roommateID || req.session.roommateID == -1){
		res.render('./index');
	}
	console.log(req.session.roommateID);
	res.render('home',data.Roommates[user]);
    
}

exports.login = function(req,res){
	var roommate = req.query;
	for (var i = 0; i < data.Roommates.length;i++){
		if(roommate.email == data.Roommates[i].email && roommate.password == data.Roommates[i].password) {
			req.session.roommateID = data.Roommates[i].id;
            res.render('home',data.Roommates[req.session.roommateID]);
		}	
        else { 
        //  login error page res.render
        }
	}

	res.render('index');
}