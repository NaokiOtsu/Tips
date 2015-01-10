var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.name = 'naoki';
});

app.filter('truncate', function(){
	return function(input, length, suffix) {
		// デフォルトでは10文字できる
		if(length === undefined){
			length = 10;
		}
		
		// デフォルトの末尾文字は
		if(suffix === undefined) {
			suffix = '...';
		}
		
		// 入力文字列が'length'より短かったらそのまま返す
		if(input.length <= length) {
			return input;
		}
		
		// 'length'の長さで切って末尾文字をくっつけて返す
		return input.substring(0, length) + suffix;
	}
});


