var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.order = 'name';
	$scope.members = [
		{ name: 'Naoki', age: 30 },
		{ name: 'Makoto', age: 32 },
		{ name: 'Daisuke', age: 28 }
	];
});



