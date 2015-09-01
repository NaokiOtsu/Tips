var app = app || {};

$(function(){
	var books = [
		{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScriptプログラミング' },
		{ title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScriptプログラミング' },
		{ title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scalaプログラミング' },
		{ title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: '斬新なスプラッター' },
		{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScriptプログラミング' }
	];
	
	new app.LibraryView(books);
});