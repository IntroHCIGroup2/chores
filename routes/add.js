var data = require('../data.json');


//CORNER CASES _ duplicates Need confirmation

exports.view = function(req, res){

	res.render('add', data);
}

exports.addChore = function(req, res) {
    
	var newchore = req.query.choreselect;
	var roommate4chore = req.query.userselect;
    
    console.log("Chore = " + newchore + " Roomie = " +  roommate4chore);
    
    var userid4chore;
    var userpicture4chore;
    
    
    for(var i = 0; i < data.Roommates.length; i++){
		if(data.Roommates[i].user == roommate4chore) {
			userid4chore = data.Roommates[i].id;
            userpicture4chore = data.Roommates[i].userpicture;
		}	

    }
     
    var chorename
    var choreimage;
    var chorepoints;
            
    for(var i = 0; i < data.chores.length; i++){
		if(data.chores[i].name == newchore) {
            chorename = data.chores[i].name;
			choreimage = data.chores[i].imageURL;
            chorepoints = data.chores[i].points;
		}	

    }
    
    	var newChore = {
                    "name": chorename,
					"userpicture": userpicture4chore,
                    "id": userid4chore,
                    "imageURL": choreimage,
                    "points": chorepoints
					};
    
    console.log(newChore);
    
     data.Roommates[userid4chore].userchores.push(newChore);
    
    res.render('add-choore',data);

   // data.Roommates.[user].push(newChore);

}


