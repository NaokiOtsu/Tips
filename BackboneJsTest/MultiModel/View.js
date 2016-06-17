var View = Backbone.View.extend({
	initialize: function() {
		console.log('View..');
		this.listenTo(this.model.modelA, 'change', this.render);
	},
	
	el: 'body',
	
	events: {
		'click #btn': 'modelChange'
	},
	
	modelChange: function() {
		this.model.modelA.hoge();
	},
	
	render: function() {
		var $body = $('body');
		$body.css({ 'margin': 20 });
		console.log('render..')
	}
});