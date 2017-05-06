var app = app || {};

(function() {
	'use strict';
	
	var App = Backbone.Model.extend({
		initialize: function(config) {
			this.config = config;
			app.config = config; // デフォルトのconfig
			console.log(this.config);
			
			this.model = {};
			this.view = {};
			
			this.createModel();
			this.createView();
		},
		
		createModel: function() {
			this.model.itemModel = new app.ItemModel(this.config);
			this.model.attackPowerModel = new app.AttackPowerModel(this.config);
		},
		
		createView: function() {
			this.view.itemView = new app.ItemView({ model: this.model });
			this.view.attackPowerView = new app.AttackPowerView({ model: this.model });
		}
	});
	
	app.App = App;
	
})();