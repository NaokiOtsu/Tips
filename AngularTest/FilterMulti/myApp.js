var app = angular.module('myApp', []);

// コントローラーを定義
app.controller('MainCtrl', function($scope){
	$scope.searchText = 'yamada';
	
	$scope.names = [
		'Kazuhito Hokamura',
		'Takeshi Takatsudo',
		'Akihiro Oyamada'
	];
});


