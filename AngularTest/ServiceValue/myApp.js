var app = angular.module('myApp', []);

app.value('members', [
	{ name: "Naoki" },
	{ name: "Makoto" },
	{ name: "Daisuke" }
]);

app.controller('MainCtrl', function($scope, members){
	$scope.members = members;
});



