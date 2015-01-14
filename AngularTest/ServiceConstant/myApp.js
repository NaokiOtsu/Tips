var app = angular.module('myApp', []);

// アプリケーションのバージョン
app.constant('VERSION', '1.0.0');

// APIのURL
app.constant('API_ENDPOINT', '/api/v1');

app.controller('MainCtrl', function($scope, VERSION){
	console.log(VERSION);
});



