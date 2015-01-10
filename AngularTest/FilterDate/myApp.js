var app = angular.module('myApp', []);

// コントローラーを定義
app.controller('MainCtrl', function($scope){
	$scope.now = new Date();
});


