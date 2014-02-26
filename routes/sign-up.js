// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){

	res.render('sign-up', data);
}

exports.addRoommate = function(req, res) {

	var parameters = req.query;
    var newRoommateID = data.Roommates.length;

	var newClass = {
					"id": newRoommateID,
					"user": parameters.user,
					"userpoints": 0,
					"home": "",
                    "homepassword": "",
                    "email": parameters.email,
                    "password": parameters.password,
                    "userpicture": "images/defaultpicture.jpg",
                    "userchores":[]
					};
    data.Roommates.push(newClass);
    req.query.id = newRoommateID;
    req.session.roommateID =  newRoommateID;
	res.render('join-a-home', data.Roommates[newRoommateID]);
}

