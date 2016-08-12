var express = require('express');
var router = express.Router();
var User = require('../models/recipe_model');


//////////  begin recipe routing  //////////
//////////  recipe POST  //////////

router.post('/users', function(req, res, next) {
  var user = new User({
    recipeTitle: req.body.recipeTitle,
    author: req.body.author,
    cookbook: req.body.cookbook,
    tags: req.body.tag,
    originStory: req.body.originStory
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

//////////  recipe GET  //////////
//////////  this needs to be tested  //////////

router.get('/users', function(req, res) {
  User.find({}, function(req, res) {
    res.json({
      success: true,
      user: user
    })
  });
})


//////////  recipe DELETE  //////////
//////////  this needs to be tested  //////////

router.delete('/users/:id', function(req, res) {
  User.findById(req.params.id, function(error, recipe) {
    recipe.remove();
    res.json({
      success: true,
      message: "recipe has been deleted"
    })
  });
})

//////////   end recipe routing   //////////



module.exports = router;
