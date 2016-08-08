var User = require('./public/models/user_model');
var Recipe = require('./public/models/recipe_model');
var Cookbook = require('./public/models/cookbook_model');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



// mongoose.connect('mongodb:// .....  '); // connect to our data
//
// app.use(express.static(__dirname + '/public'));

//configure app to use bodyParser() - this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


//routes for our API
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) {
  console.log("Is anything happening?");
  next(); //make sure we go to the next routes and don't stop here
});

//test route to make sure everything is working
router.get('/', function(req, res) {
  res.json({
    message: "welcome to our api!"
  });
});

//place additional routes for our API here
// app.get('/api/users', function(req, res) {
//   var key = req.query.key;
  // var rId = req.param('rId');
//   console.log('hello world /////');
//   res.send(key);
// });


//register our routes
app.use('/api', router);


//start the stateProvider
app.listen(port);
console.log("Magic happens on port " + port);
