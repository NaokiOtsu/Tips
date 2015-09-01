var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.gif',
		title: '無題',
		author: '不明',
		releaseDate: '不明',
		keywords: 'なし'
	}
});