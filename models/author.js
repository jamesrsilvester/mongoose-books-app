var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//author schema contains 3 keys, and an image.
var AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
