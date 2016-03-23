App.TweetModel = Backbone.Model.extend({
	defaults: {
		text: null
	},
	localStorage: new Backbone.LocalStorage("tweet"),
	validate: function(attrs) {
		if (!attrs.text) { return 'テキストは必須です'; }
	},
	parse: function(attrs) {
		return attrs;
	}
});
