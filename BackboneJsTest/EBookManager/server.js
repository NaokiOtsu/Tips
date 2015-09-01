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

mongoose.connect('mongodb://localhost/library_database');

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date
});

var BookModel = mongoose.model('Book', Book);