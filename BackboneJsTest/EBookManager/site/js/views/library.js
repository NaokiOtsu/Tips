var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',
	
	initialize: function() {
		this.collection = new app.Library();
		this.collection.fetch({ reset: true });
		this.render();
		
		this.listenTo(this.collection, 'add', this.renderBook);
		this.listenTo(this.collection, 'reset', this.render);
	},
	
	events: {
		'click #add': 'addBook'
	},
	
	addBook: function(e) {
		e.preventDefault();
		
		var formData = {};
		
		$('#addBook div').children('input').each(function(e, el) {
			if($(el).val() != '') {
				formData[el.id] = $(el).val();
			}
		});
		
		this.collection.create(formData);
	},
	
	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item);
		}, this);
	},
	
	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append(bookView.render().el)
	}
});