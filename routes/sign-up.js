var data = require('../data.json');

exports.view = function(req, res){

	res.render('sign-up', data);
}

exports.addRoommate = function(req, res) {

    var newRoommateID = data.Roommates.length;

	var newRoommate = {
					"id": newRoommateID,
					"user": req.query.user,
					"userpoints": 0,
					"home": "",
                    "homepassword": "",
                    "email": req.query.email,
                    "password": req.query.password,
                    "userpicture": "images/defaultpicture.jpg",
                    "userchores":[]
					};
    data.Roommates.push(newRoommate);
    req.query.id = newRoommateID;
    req.session.roommateID =  newRoommateID;
	res.render('join-a-home', data.Roommates[newRoommateID]);
}

