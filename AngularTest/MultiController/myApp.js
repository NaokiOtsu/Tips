var app = angular.module('myApp', []);

// コントローラーを定義
app.controller('FirstCtrl', function($scope){
	$scope.name = 'naoki';
});
app.controller('SecondCtrl', function($scope){
	$scope.name = 'makoto';
});

