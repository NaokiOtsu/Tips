var app = app || {};

(function() {
	'use strict';
	
	var AttackPowerModel = Backbone.Model.extend({
		initialize: function(config) {
			console.log('attack power model..')
			this.config = config;
		},
		
		getAttackPower: function() {
			return this.get('attack');
		},
		
		setAttackPower: function(num) {
			var power = this.getAttackPower();
			this.set('attack', power + num);
		}
	});
	
	app.AttackPowerModel = AttackPowerModel;
	
})();