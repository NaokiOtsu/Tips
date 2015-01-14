var app = angular.module('myApp', []);

app.directive('myBtn', function(){
	return {
		// 要素名を対象としたディレクティブであるという指定
		restrict: 'E',
		
		// ディレクティブの内容となるテンプレート
		template: '<span class="my-btn">{{label}}</span>',
		
		// スコープを新しく作る
		scope: {
			label: '@'
		}
	};
});

app.controller('MainCtrl', function($scope){
	$scope.labelText = '編集';
});
