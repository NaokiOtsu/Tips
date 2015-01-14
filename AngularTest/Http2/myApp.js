var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope, $http){
	$http({ method: 'GET', url: './members.json' })
		.success(function(data, status, headers, config){
			console.log(data);
			console.log(status);
			console.log(headers('content-type'));
			console.log(config);
		})
		.error(function(){
			// エラー処理
		});
});



