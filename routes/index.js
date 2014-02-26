exports.view = function(req, res) {

    res.render('index');

}
exports.logout = function(req,res){

	req.session.userID = -1;
	console.log(req.session.studentID);
	res.render('index');
}