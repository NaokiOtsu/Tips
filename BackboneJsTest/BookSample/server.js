var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var bookId = 100;

function findBook(id) {
	for(var i = 0; i< books.length; i++) {
		if(books[i].id === id) {
			return books[i];
		}
	}
	return null;
}

function removeBook(id) {
	var bookIndex = 0;
	for(var i = 0; i < books.length; i++) {
		if(books[i].id === id) {
			bookIndex = i;
		}
	}
	books.splice(bookIndex, i);
}

var allowCrossDomain = function(req, response, next) {
	response.header('Access-Control-Allow-Origin', 'http://localhost');
	response.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	if('OPTIONS' == req.method) {
		response.send(200);
	} else {
		next();
	}
};

// app.use(allowCrossDomain);
app.use(bodyParser);

var books = [
	{id: 98, author: 'Naoki', title: 'aaa', year: 1977},
	{id: 99, author: 'Makoto', title: 1949},
];

app.get('/books', function(request, response) {
	// response.header('Access-Control-Allow-Origin', '*');
	// console.log('In GET function');
	// response.json(books);
	response.send('あああああああああ')
});

app.get('/books/:id', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	console.log('Getting a book with id' + request.params.id);
	var book = findBook(parseInt(request.params.id, 10));
	if(book === null) {
		response.send(404);
	} else {
		response.json(book);
	}
});

app.post('/books/', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	var book = request.body;
	console.log('Saving book with the following structure' + JSON.stringify(book));
	book.id = bookId++;
	books.push(book);
	response.json(book);
});

app.put('/books/:id', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	var book = request.body;
	console.log('Updating Book ' + JSON.stringify(book));
	var currentBook = findBook(parseInt(request.params.id, 10));
	if(currentBook === null) {
		response.send(404);
	} else {
		currentBook.title = book.title;
		currentBook.year = book.year;
		currentBook.author = book.author;
		response.json(book);
	}
});

app.delete('/books/:id', function(request, response) {
	console.log('calling delete');
	response.header('Access-Control-Allow-Origin', '*');
	var book = findBook(parseInt(request.params.id, 10));
	if(book === null) {
		console.log('Could not find book');
		response.send(404);
	} else {
		console.log('Deleting ' + request.params.id);
		removeBook(parseInt(request.params.id, 10));
		response.send(200);
	}
});

var port = 8080;
app.listen(port, function(){
	console.log(' %d で起動しました。モード: %s', port, app.settings.env);
});