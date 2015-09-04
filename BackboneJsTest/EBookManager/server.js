var application_root = __dirname;
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, 'site')));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = 4711;
app.listen(port, function() {
	console.log('Expressサーバがポート %d で起動しました。モード: %s', port, app.settings.env);
});

app.get('/api', function(request, response) {
	response.send('ライブラリのAPIを利用可能です');
});

app.get('/api/books', function(request, response) {
	return BookModel.find(function(err, books) {
		if(!err) {
			return response.send(books);
		} else {
			return console.log(err);
		}
	})
});

app.get('/api/books/:id', function(request, response) {
	return BookModel.findById(request.params.id, function(err,book){
		if(!err) {
			return response.send(book);
		} else {
			return console.log(err);
		}
	});
});

app.post('/api/books', function(request, response) {
	var book = new BookModel({
		title: request.body.title,
		author: request.body.author,
		releaseDate: request.body.releaseDate,
		keywords: request.body.keywords
	});
	book.save(function(err) {
		if(!err) {
			return console.log('追加されました');
		} else {
			return console.log(err);
		}
	});
	return response.send(book);
});

app.put('/api/books/:id', function(request, response) {
	console.log('更新します: ' + request.body.title);
	return BookModel.findById(request.params.id, function(err, book) {
		book.title = request.body.title;
		book.author = request.body.author;
		book.releaseDate = request.body.releaseDate;
		book.keywords = request.body.keywords;
		
		return book.save(function(err) {
			if(!err) {
				console.log('更新されました');
			} else {
				console.log(err);
			}
			return response.send(book);
		});
	});
});

app.delete('/api/books/:id', function(request, response) {
	console.log('削除する本のID: ' + request.params.id);
	return BookModel.findById(request.params.id, function(err, book) {
		return book.remove(function(err) {
			if(!err) {
				console.log('本が削除されました');
				return response.send('');
			} else {
				console.log(err);
			}
		});
	});
});

mongoose.connect('mongodb://localhost/library_database');

var BookModel = mongoose.model('Book', Book);

var KeyWords = new mongoose.Schema({
	keyword: String
});

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ Keywords ]
});


