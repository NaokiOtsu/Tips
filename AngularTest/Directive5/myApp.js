var app = angular.module('myApp', []);

app.directive('myBtn', function(){
	return {
		// 要素名を対象としたディレクティブであるという指定
		restrict: 'E',
		
		// スコープを新しく作る
		scope: {
			label: '='
		},
		
		// ディレクティブの内容となるテンプレート
		template: '<span class="my-btn">{{label}}</span>',
		
		link: function(scope, element) {
			element.on('click', function(){
				scope.label = '削除';
				scope.$apply();
			});
		}
	};
});

app.controller('MainCtrl', function($scope){
	$scope.labelText = '編集';
});
