var data = require('../data.json');
var fs = require('fs');


//CORNER CASES _ duplicates Need confirmation

exports.view = function(req, res){

	res.render('add', data);
}

exports.addChore = function(req, res) {
    
	var newchore = req.query.choreselect;
	var roommate4chore = req.query.userselect;
    
    console.log("Chore = " + newchore + " Roomie = " +  roommate4chore);
    
    //var userid4chore;
    var userpicture4chore;
    
    //Grab User Picture of User being assigned a Chore
    for(var i = 0; i < data.Roommates.length; i++){
		if(data.Roommates[i].user == roommate4chore) {
			userid4chore = data.Roommates[i].id;
            userpicture4chore = data.Roommates[i].userpicture;
		}	
    }
    
    //Grab Chore Details for chore to be assigned
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

    //try storing in buffer
    	var newChore = {
                "userpicture": userpicture4chore,
                "name": chorename,
                "imageURL": choreimage,
                "points": chorepoints
     	};
 
        var buf = new Buffer(100);
        buf.write("newChore");
    
    //console.log(userid4chore);
    
   // data.Roommates[userid4chore].userchores.push(newChore);
    
    //Do writeFile overwrite data.json with new data
    for(var k = 0; k < data.Roommates.length; k++){
        console.log("Inside First Loop");
        console.log(roommate4chore);
        if(roommate4chore == data.Roommates[k].user){ 
            console.log("Found user, proceeding to find userchore list");
            //var roomieNum = k;
            for(var l = 0; l < data.Roommates[k].userchores.length; l++){
                console.log("Inside Second Loop");
                console.log("Roomie userchore length :" + data.Roommates[k].userchores.length + "equals?" + l);
                if(l == data.Roommates[k].userchores.length-1){
                    console.log("Found insertion point to write to file");
                    
                    //both appendFile and writeFile write to the end of the file, how do we write to a specific insertion point?
                    
                    fs.write('data.json', buf, 0, 100, null, function(err){
                        if(err){
                            throw err;
                        }
                        console.log("Successfully wrote to  DB");
                    });
                    break;
                }
            }
        }
    }
    
    res.render('add-choore',data);
}


