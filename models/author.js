//connect mongoose framework
let mongoose = require('mongoose');
//create Schema
let Schema = mongoose.Schema;
//Format data that AuthorSchema should contain
let AuthorSchema = new Schema ({
  name: String,
  alive: Boolean,
  image: String,
});
//Create author model from Schema
let Author = mongoose.model('Author', AuthorSchema);
//export model.
module.exports = Author;
