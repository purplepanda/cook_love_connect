var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe_model');


//////////  begin recipe routing  //////////
//////////  recipe POST  //////////

router.post('/recipes', function(req, res, next) {
  var recipe = new Recipe({
    recTitle: req.body.recTitle,
    recAuthor: req.body.recAuthor,
    recCookbook: req.body.recCookbook,
    recTags: req.body.recTags,
    recOriginStory: req.body.recOriginStory
  });
  console.log(recipe);


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
        recipe: recipe
      })
    }
  });
})

//////////  recipe GET  //////////

router.get('/recipes', function(req, res) {
  Recipe.find({}, function(req, res) {
    res.json({
      success: true,
      recipe: recipe
    })
  });
})


//////////  recipe DELETE  //////////
//////////  this needs to be tested  //////////

router.delete('/recipes/:id', function(req, res) {
  Recipe.findById(req.params.id, function(error, recipe) {
    recipe.remove();
    res.json({
      success: true,
      message: "recipe has been deleted"
    })
  });
})

//////////   end recipe routing   //////////



module.exports = router;
