var app = angular.module('myApp', []);

app.factory('counter', function(){
	return {
		count: 0,
		
		// カウントを1増やす
		increment: function(){
			this.count++;
		},
		
		// 指定の数だけカウントを増やす
		add: function(count) {
			this.count += count;
		}
	};
});

app.controller('MainCtrl', function($scope, counter){
	$scope.counter = counter;
});



