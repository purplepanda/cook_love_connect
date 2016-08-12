var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeSchema = new Schema({
  recTitle: {
    type: String,
    required: true,
  },
  recAuthor: {
    type: String,
  },
  recCookbook: [{
    type: String,
    required: true
  }],
  recTags: [{
    type: String
  }],
  recOriginStory: {
    type: String
  }
});


// recImage: {
//   type: String
// },
// recIngredients: [{
//   type: String
// }],
// recInstructions: [{
//   type: String
// }]

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
