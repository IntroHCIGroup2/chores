var data = require("../data.json");

exports.addChore = function(req, res) {
    
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