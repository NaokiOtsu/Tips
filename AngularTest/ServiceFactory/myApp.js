var app = angular.module('myApp', []);

app.factory('fetchMembers', function($http, API_ENDPOINT){
	return $http.get(API_ENDPOINT + './members.json');
});

app.controller('MainCtrl', function($scope, fetchMembers){
	fetchMembers.success(function(members){
		$scope.members = members;
	});
});



