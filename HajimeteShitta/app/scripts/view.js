App.TweetView = Backbone.View.extend({
	initialize: function(options) {
		this.name = options.name;
		this.listenTo(App.mediator, 'add change remove', this.render);
		this.render();
	},
	template: $('#item-template').html(),
	render: function() {
		var list = this.$el.find('.ul');
		console.log(this.template);
		var html = _.template(this.template);
		
		list.html(html);
		return this;
	}
});

App.HeaderView = Backbone.View.extend({
	initialize: function() {
	},
	events: {
		'click .btn': 'btnClick',
		'click .popup-close': 'closeClick'
	},
	btnClick: function() {
		var popup = $('.popup');
		popup.show();
	},
	closeClick: function() {
		var popup = $('.popup');
		popup.hide();
	}
});