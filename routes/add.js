var data = require("../data.json");

exports.addChore = function(req, res) {
	// Your code goes here

	

	var newChoreName = req.query.chore;

	var newChore = {
		'chore' : newChoreName,
        "roommate": "images/woman.jpg",
        "imageURL":"images/icon_19395.png"

	};
	
        res.render('add', data);
    data["roommates"].push(newChore);
}