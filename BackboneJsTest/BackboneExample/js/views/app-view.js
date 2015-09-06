var app = app || {};

(function ($) {
	'use strict';
	
	app.AppView = Backbone.View.extend({
		el: '.todoapp',
		statsTemplate: _.template($('#stats-template').html()),
		events: {
			'keypress .new-todo': 'createOnEnter',
			'click .clear-completed': 'clearCompleted',
			'click .toggle-all': 'toggleAllComplete'
		},
		initialize: function () {
			this.allCheckbox = this.$('.toggle-all')[0];
			this.$input = this.$('.new-todo');
			this.$footer = this.$('.footer');
			this.$main = this.$('.main');
			this.$list = $('.todo-list');
		}
	});
});