var express = require('express');
var router = express.Router();
var User = require('../models/user_model');
var mid = require('../middleware');


router.get('/users/:id', function(req, res) {
  User.findById(req.params.id, function(error, user) {
    res.json({
      success: true,
      user: user
    })
  });
})

router.get('/users', function(req, res) {
  User.find({}, function(error, users) {
    res.json({
      success: true,
      users: users
    })
  });
})

router.post('/users', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  console.log(user);

  user.save(function(error) {
    if (error) {
      console.log("Not saved");
      console.log(error);
      res.json({
        success: false,
        error: error
      })
    } else {
      console.log("Saved!");
      res.json({
        success: true,
        user: user
      })
    }
  });
})

// this needs to be tested.
router.delete('/users/:id', function(req, res) {
  User.findById(req.params.id, function(error, user) {
    user.remove()
    res.json({
      success: true,
      message: "user has been deleted"
    })
  });
})



////////all routes below here are copied from tutorial and do not necessarily work/////////
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





module.exports = router;
