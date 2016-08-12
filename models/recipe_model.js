var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  recipeTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  cookbook: [{
    type: String,
    required: true
  }],
  originStory: {
    type: String
  },
  tag: [{
    type: String
  }],
  recipeImage: {
    type: String
  },
  ingredient: [{
    type: String
  }],
  instruction: [{
    type: String
  }]
});


var User = mongoose.model('User', UserSchema);
module.exports = User;
