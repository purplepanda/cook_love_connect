var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var pug = require('pug');
var app = express();
var port = process.env.PORT || 8080; //tells node which localhost port to use

mongoose.connect('mongodb://localhost:27017/recipe_app');
var db = mongoose.connection;


//mongo error
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(__dirname + '/public')); //tells express to find static html files in the public folder

//configure app to use bodyParser() - this will let us get the data from a POST // in string from, i think?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// view engine setup // for use with jade templates, not sure about 2nd line
//how do you even use jade? does is automatically convert html to templates? What am I doing?

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/partials');



//routes for our API
// var router = express.Router();
//from other tutorial

var routes = require('./routes/index');
app.use('/', routes);

//middleware to use for all requests
// router.use(function(req, res, next) {
//   console.log("Is anything happening?");
//   next();
//   //make sure we go to the next routes and don't stop here
// });
//from other tutorial

//test route to make sure everything is working
// router.get('/', function(req, res) {
//   res.json({
//     message: "welcome to our api!"
//   });
// });
// from another tutorial

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

//place additional routes for our API here


//register our routes
// app.use('/api', router);
//from other tutorial


//start the stateProvider
app.listen(port);
console.log("Magic happens on port " + port);
