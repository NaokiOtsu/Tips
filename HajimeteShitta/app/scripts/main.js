var App = {};
App.mediator = _.extend({}, Backbone.Events);

$(function(){
	var appTweetModel = new App.TweetModel();
	appTweetModel.fetch();
	
	var appTweetView = new App.TweetView({
		el: '#contents',
		model: appTweetModel
	});
	var appHeaderView = new App.HeaderView({
		el: 'body'
	});
	window.appTweetModel = appTweetModel;
	window.appTweetView = appTweetView;
	
});