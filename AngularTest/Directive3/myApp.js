var app = angular.module('myApp', []);

app.directive('myTextBox', function(){
	return {
		// 要素名を対象としたディレクティブであるという指定
		restrict: 'E',
		
		// ディレクティブの内容となるテンプレート
		template: '<div><input ng-model="text">{{text}}</div>',
		
		// スコープを新しく作る
		scope: {}
	};
});

app.controller('MainCtrl', function($scope){
	
});
