var app = app || {};

(function($) {
	'use strict';
	
	app.TodoView = Backbone.View.extend({
		tagName: 'li',
		
		template: _.template($('#item-template').html()),
		
		events: {
			'click .toggle' : 'toggleCompleted',
			'dblclick label' : 'edit',
			'click .destory' : 'clear',
			'keypress .edit' : 'updateOnEnter',
			'keypress .edit' : 'revertOnEscape',
			'blur .edit' : 'close'
		},
		
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destory', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},
		
		render: function() {
			if (this.model.changed.id !== undefined) {
				return;
			}
			
			
		}
	});
})(jQuery);