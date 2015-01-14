var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.isShow = true;
	
	$scope.toggle = function () {
		$scope.isShow = !$scope.isShow;
	};
});



