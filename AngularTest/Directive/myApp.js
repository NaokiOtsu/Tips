var app = angular.module('myApp', []);

app.directive('myAlert', function($window){
	return {
		link: function(scope, element, attrs) {
			var message = attrs.message;
			
			element.on('click', function(){
				$window.alert(message);
			});
		}
	};
});

