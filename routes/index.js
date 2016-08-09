var express = require('express');
var router = express.Router();
var User = require('../models/user_model');
var mid = require('../middleware');




//GET /profile
router.get('/userhome', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
    .exec(function(error, user) {
      if (error) {
        return next(error);
      } else {
        return res.render('userhome', {
          title: 'My Kitchen',
          name: user.name,
        });
      }
    });
});




// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});



//GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', {
    title: 'Log In'
  });
});



//POST /login
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function(error, user) {
      console.log("What?");
      if (error || !user) {

        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
        //what is the problem with this error?
        // return res.send('Logged In!');
      } else {
        req.session.userId = user._id;
        return res.redirect('/public/partials/userhome');

        // return res.redirect('/userhome');
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});



// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
  // return res.send('Register today!');
  return res.render('register', {
    title: 'Sign Up'
  });
}); //use res because we just want to get a response the reg form at this point, and we are not sending anything
//check to see if this is working at: http://localhost:8080/register (it does work!)



// router.get('/show_les', function(req, res, next) {
//   var les = User.find({
//     email: 'les@gmail.com'
//   })
//   res.json({
//     status: 'ok',
//     userFirstName: les.firstName
//   })
// })


// res.json({
//   success: true
// })


// POST / register User
router.post('/register', function(req, res, next) {
  // res.send('User Created!');
  if (req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.password &&
    req.body.confirmPassword) {
    //confirm that user typed same password twice
    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);

    }

    //create User object with form input
    var userData = new User({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    User.create(userData, function(error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/userhome');
      }
    });
    // user.save(function(err) {
    //   if (err) {
    //     console.log(err);
    //     res.json({
    //       "status": "bad"
    //     });
    //     // res.send('Error!');
    //   } else {
    //     console.log('meow');
    //     res.json({
    //       "status": "yay"
    //     });
    //     // res.send('User Created!');
    //   }
    // });

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})




// GET /landing page
router.get('/', function(req, res, next) {
  return res.render('landing', {
    title: 'Welcome'
  });
});



// GET /userhome
router.get('/userhome', mid.requiresLogin, function(req, res, next) {
  return res.render('userhome', {
    title: 'My Kitchen'
  });
});



// GET /myCookbook
router.get('/cookbook', mid.requiresLogin, function(req, res, next) {
  return res.render('cookbook', {
    title: 'My Cookbook'
  });
});



module.exports = router;;
