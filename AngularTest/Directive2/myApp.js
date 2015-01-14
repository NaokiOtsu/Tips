var app = angular.module('myApp', []);

app.directive('myBtn', function(){
	return {
		// 要素名を対象としたディレクティブであるという指定
		restrict: 'E',
		
		// ディレクティブの内容となるテンプレート
		template:
			'<span class="my-btn">' + 
			' <i class="fa fa-{{icon}}"></i>' + 
			' <span>{{label}}</span>' + 
			'</span>',
		
		// 元の要素を置き換える
		replace: true,
		
		// スコープを新しく作る
		scope: true,
		
		link: function(scope, element, attrs) {
			scope.icon = attrs.icon;
			scope.label = attrs.label;
		}
	};
});

app.controller('MainCtrl', function($scope){
	
});
