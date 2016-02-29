var Book = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/books/'
	
});

var book = new Book();

book.save(book.attributes, {
	success: function(model, response, options) {
		console.log('Model saved');
		console.log('Id: ' + book.get('id'));
	},
	error: function(model, ehr, options) {
		console.log('Failed to save model');
	}
});


book.fetch({
	success: function(model, response, options) {
		console.log('Fetch success');
	},
	error: function(model, ehr, options) {
		console.log('Fetch error');
	}
});

