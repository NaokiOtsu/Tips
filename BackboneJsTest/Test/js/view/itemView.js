var app = app || {};

(function() {
	'use strict';
	
	var ItemView = Backbone.View.extend({
		initialize: function() {
			console.log('item view..');
			
			this.$item1 = this.$el.find('.item1');
			this.$item1_btn = this.$el.find('#item1');
			
			this.listenTo(this.model.itemModel, 'change', this.render);
			
			this.render();
		},
		
		el: 'body',
		
		events: {
			'click #item1': 'click1'
		},
		
		click1: function() {
			this.model.attackPowerModel.setAttackPower(1);
			this.model.itemModel.setItem1(1);
		},
		
		render: function() {
			var item1_num = this.model.itemModel.getItem1();
			var power = this.model.attackPowerModel.getAttackPower();
			
			if (item1_num <= 0) this.btn1Disable();
			if (power >= 5) this.btn1Disable();
			
			this.$item1.html(item1_num);
		},
		
		btn1Disable: function() {
			this.$item1_btn.css({ 'pointer-events': 'none'});
		}
	});
	
	app.ItemView = ItemView;
	
})();