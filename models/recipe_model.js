var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeSchema = new Schema({
  title: String,
  contributor: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
