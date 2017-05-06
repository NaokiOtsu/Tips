var ModelA = Backbone.Model.extend({
	initialize: function() {
		console.log('ModelA..')
	},
	hoge: function() {
		this.set('aaa', 2);
		console.log(this)
	}
});