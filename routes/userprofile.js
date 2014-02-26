var data = require('../data.json');

exports.view = function(req, res){
	var user = req.session.roommateID;
	if(!req.session.roommateID || req.session.roommateID == -1){
		res.render('./index');
	}
	console.log(req.session.roommateID);
	res.render('userprofile',data.Roommates[user]);
}



exports.upload = function(req, res) {
	var userFile = require("../data.json");
    
    var fs=require('fs');
    
    console.log(req.files);
    
	fs.readFile(req.files.image.path, function (err, data) {

		var newPath = "../public/images/" + req.session.roommateID +".jpg";
		
		  /// write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {
		  });
        userFile.Students[req.session.userID].imageURL = "images/" + req.session.userID + ".jpg";

		  res.redirect('userprofile.handlebars');
		
	});
}