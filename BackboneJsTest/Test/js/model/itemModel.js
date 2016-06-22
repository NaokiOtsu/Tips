var app = app || {};

(function() {
	'use strict';
	
	var ItemModel = Backbone.Model.extend({
		initialize: function(config) {
			console.log('item model..')
			this.config = config;
		},
		
		getItem1: function() {
			var items = this.get('items');
			return items.item1;
		},
		
		setItem1: function(num) {
			var item = this.getItem1();
			this.set('items', { 'item1': item - num});
		}
	});
	
	app.ItemModel = ItemModel;
	
})();