var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//book schema contains 3 keys, and an image.
var BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
