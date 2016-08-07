var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CookbookSchema = new Schema({
  title: String,
  members: [String]
});

module.exports = mongoose.model('Cookbook', CookbookSchema);
