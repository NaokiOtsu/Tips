var app = app || {};

(function() {
	'use strict';
	
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},
		
		setFilter: function (param) {
			console.log(param)
			app.TodoFilter = param || '';
			
			app.todos.trigger('filter');
		}
	});
	
	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();