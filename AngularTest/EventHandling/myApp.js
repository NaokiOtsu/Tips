var app = angular.module('myApp', []);

// コントローラーを定義
app.controller('MainCtrl', function($scope){
	$scope.name = 'naoki';
	
	$scope.onClickBtn = function(){
		// 文字列を反対にする
		$scope.name = $scope.name.split('').reverse().join('');
	}
});

