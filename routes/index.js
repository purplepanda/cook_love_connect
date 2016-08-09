var express = require('express');
var router = express.Router();
var User = require('../models/user_model');

// GET /register
router.get('/register', function(req, res, next) {
  // return res.send('Register today!');
  return res.render('register', {
    title: 'Sign Up'
  });
}); //use res because we just want to get a response the reg form at this point, and we are not sending anything
//check to see if this is working at: http://localhost:8080/register (it does work!)

router.get('/show_les', function(req, res, next) {
  var les = User.find({
    email: 'les@gmail.com'
  })
  res.json({
    status: 'ok',
    userFirstName: les.firstName
  })
})


// res.json({
//   success: true
// })

// POST / register
//this will create a new user in the database
router.post('/register', function(req, res, next) {
  // console.log('we\'re in the register post route');
  // return res.send('Success! User Created!');
  var user = new User({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.json({
        "status": "bad"
      });
      // res.send('Error!');
    } else {
      console.log('meow');
      res.json({
        "status": "yay"
      });
      // res.send('User Created!');
    }
  });

  if (req.body.email &&
    req.body.firstname &&
    req.body.lastname &&
    req.body.password &&
    req.body.confirmPassword) {
    //confirm that user typed same password twice
    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      return next(err);
    }
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

// GET /landing page
router.get('/', function(req, res, next) {
  return res.render('landing', {
    title: 'Welcome'
  });
});

// GET /userhome
router.get('/userhome', function(req, res, next) {
  return res.render('userhome', {
    title: 'My Kitchen'
  });
});

// GET /myCookbook
router.get('/cookbook', function(req, res, next) {
  return res.render('cookbook', {
    title: 'My Cookbook'
  });
});

module.exports = router;
