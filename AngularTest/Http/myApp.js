var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope, $http){
	$http({ method: 'GET', url: './members.json' })
		.success(function(members){
			$scope.members = members;
		})
		.error(function(){
			// エラー処理
		});
});



