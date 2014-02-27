var data = require("../data.json");

exports.addChore = function(req, res) {
    
<<<<<<< HEAD
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

=======
    //Take out ability to add duplicate chores
    //Add ability to assign chores to a different user instead of the current user
    //Add drop down menu functionality for chore and user in add-choore.handlebars and link here
    //In data.json add different pictures for the different chores, same picture is used for multiple chores
    //Add ability to add custom chore and assign custom image
    //What happens when user enters an invalid choice? XXXXXXXXXXXXXXXXXXXX
    
    
   //Get the name of the chore to be added
   var newChore = req.query.chore; 
   //Get the ID of current user
   var user = req.session.roommateID;
   var successfulAdd= 0;
    
   //Prepare chore to be pushed to Database
   var newChoreName = {
       "name" : newChore,
       //Right now this just adds the current user picture to the db
       "userpicture": data.Roommates[user].currrentchore.userpicture
>>>>>>> f9f03b699d17f3db16adaa80eb069311a6e95d39
    }
   

   //Match chore to be pushed with valid entry in database then push to chorelist of current user
   for(var i = 0; i < data.chores.length; i++){
       if(newChoreName.name == data.chores[i].name){
           newChoreName.imageURL = data.chores[i].imageURL;
           console.log(newChore+" is a valid chore, adding to the database");
           data.Roommates[user].userchores.push(newChoreName);
           successfulAdd = 1;
           res.render('home', data.Roommates[user]);
           break;
       }
   }
  
  if(successfulAdd != 1){
      console.log(newChore+" is not a valid chore, cannot add to the database");
      res.render('home', data.Roommates[user]);
  }
}
