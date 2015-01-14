var app = angular.module('myApp', ['ngResource']);

app.controller('MainCtrl', function($scope, $resource){
	var Member = $resource('./members/:id.json', { id: '@id' });
	
	$scope.members = Member.query();
});



