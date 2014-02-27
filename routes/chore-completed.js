var data = require('../data.json');

exports.removeChore = function removeChore(req, res){
	console.log("Call to RemoveChore Made");
    
    var chore = req.query.chore;
    var user = req.session.roommateID;
    var selection = 0;

    //Search for the appropriate user then loop through his or her chores to search for the chore to be removed
    for(var i = 0; i < data.Roommates.length; i++){
        console.log("ROOMIE: " + req.session.roommateID + " equals? " + i);
        if(req.session.roommateID == i){            
            console.log("Found user who needs to have his/her chore removed, roommateID: " + i);
            var roomie = req.session.roommateID;
            console.log("roomie: " + roomie);
            for(var j = 0; j < data.Roommates[roomie].userchores.length; j++){
                console.log("CHORENAME:  " + chore +  " equals? " + data.Roommates[i].userchores[j].name);
                if(chore == data.Roommates[i].userchores[j].name){
                    selection = 1;
                    console.log("Found chore to be removed, preparing to remove"); 
                    delete data.Roommates[roomie].userchores[j];
                    console.log("Entry successfully removed");
                    console.log(data.Roommates[roomie].userchores);
                    break;
                }   
            }
        }  
    } 
    
    if(selection != 1){
        console.log("Chore could not successfully be removed");
        res.render('home', data);
    }
    
	res.render('chore-completed', data);
};
