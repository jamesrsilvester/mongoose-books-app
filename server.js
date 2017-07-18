// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');
  // NOTE: Required db so server can access all models. Index will show by default.
  db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////




////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', function (req, res) {
  // get all books (all b/c find parameters empy) respond as JSON
  db.Book.find(function(err,books){
    if (err) {
      console.log("index.error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });

});

// get one book by ID from URL
app.get('/api/books/:id', function (req, res) {
// save book ID from URL
  let bookID = req.params.id;
    //check DB for book by bookID
  db.Book.findById(bookID, function(err,books){
    if (err) {
      console.log("index.error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  var newBook = new db.Book(req.body);
  //check DB for book by bookID
  newBook.save(function (err,books){
    if (err) {
      console.log("index.error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });


  res.json(newBook);
});

// // update book
// app.put('/api/books/:id', function(req,res){
// // get book id from url params (`req.params`)
//   console.log('books update', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   var updateBookIndex = books.findIndex(function(element, index) {
//     return (element._id === parseInt(req.params.id)); //params are strings
//   });
//   console.log('updating book with index', deleteBookIndex);
//   var bookToUpdate = books[deleteBookIndex];
//   books.splice(updateBookIndex, 1, req.params);
//   res.json(req.params);
// });

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  var bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndRemove({ _id:bookId }, function (err, deletedBook)
  {res.json(deletedBook);
  });
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
