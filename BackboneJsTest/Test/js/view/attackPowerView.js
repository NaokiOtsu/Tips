var app = app || {};

(function() {
	'use strict';
	
	var AttackPowerView = Backbone.View.extend({
		initialize: function() {
			console.log('attack power view..');
			this.render();
			
			this.listenTo(this.model.attackPowerModel, 'change', this.render);
		},
		
		el: '.attack-list',
		
		render: function() {
			var attackPower = this.model.attackPowerModel.getAttackPower();
			for (var i = 0; i < attackPower; i++) {
				console.log(this.$el.find('li').eq(i).html('◯'))
			}
		}
	});
	
	app.AttackPowerView = AttackPowerView;
	
})();