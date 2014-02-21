
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var scores = require('./routes/scores');
var addchore = require('./routes/add-choore');
var currentchore = require('./routes/current-chore');
var userprofile = require('./routes/userprofile');
var settings = require('./routes/settings');
var signup = require('./routes/sign-up');
var forgotpassword = require('./routes/forgot-password');
var passwordsent = require('./routes/password-sent');
var joinahome = require('./routes/join-a-home');
var createhome = require('./routes/create-home');
var invitetohousehold = require('./routes/invite-to-household');
var inviteroommate = require('./routes/invite-roommate');
var homesettings = require('./routes/home-settings');
var password = require('./routes/password');
var about = require('./routes/about');
var help = require('./routes/help');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/home.handlebars', home.view);
app.get('/scores.handlebars', scores.view);
app.get('/add-choore.handlebars', addchore.view);
app.get('/current-chore.handlebars', currentchore.view);
app.get('/userprofile.handlebars', userprofile.view);
app.get('/settings.handlebars', settings.view);
app.get('/sign-up.handlebars', signup.view);
app.get('/forgot-password.handlebars', forgotpassword.view);
app.get('/password-sent.handlebars', passwordsent.view);
app.get('/join-a-home.handlebars', joinahome.view);
app.get('/create-home.handlebars', createhome.view);
app.get('/invite-to-household.handlebars', invitetohousehold.view);
app.get('/invite-roommate.handlebars', inviteroommate.view);
app.get('/home-settings.handlebars', homesettings.view);
app.get('/password.handlebars', password.view);
app.get('/about.handlebars', about.view);
app.get('/help.handlebars', help.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
