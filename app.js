var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var pug = require('pug');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();
var port = process.env.PORT || 8080; //tells node which localhost port to use




//mongodb connection
mongoose.connect('mongodb://localhost:27017/recipe_app');
var db = mongoose.connection;

//mongo error
db.on('error', console.error.bind(console, 'connection error:'));




//use sessions for tracking logins
app.use(session({
  secret: 'amanda was here',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

//make user ID available in templates
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
});




//where to find static html files
app.use(express.static(__dirname + '/public')); //tells express to find static html files in the public folder




//configure app to use bodyParser() - this will let us get the data from a POST // in string from, i think?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));




// view engine setup // for use with jade templates, not sure about 2nd line
//how do you even use jade here? does is automatically convert html to templates? What am I doing?
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');




var routes = require('./routes/index');
app.use('/', routes);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




//start the stateProvider
app.listen(port);
console.log("Magic happens on port " + port);
