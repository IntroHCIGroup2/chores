var data = require("../data.json");

exports.addChore = function(req, res) {
   //The line of code below is trying to access a form from add-choore.handlebars,
   //grab its value and use it to do the addChore method in addChore.js, currently
   //it is not working 
var newChore = document.getElementById("chore").value;
   var user = req.session.roommateID;
   var newChoreName = {
       "name" : newChore,
               "roommate": data.Roommates[user].userpicture
               }
   

   for(var i = 0; i < data.chores.length; i++){
       if(newChoreName.name == data.chores[i].name){
           newChoreName.imageURL = data.chores[i].imageURL;
           
           data.Roommates[user].userchores.push(newChoreName);
           res.render('home', data.Roommates[user]);
       }
   }

   console.log(newChore+"is not a valid chore");
   res.render('home', data.Roommates[user]);
}