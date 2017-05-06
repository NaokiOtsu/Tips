angular.module('app', [])
	.controller('notificationController', function() {})
	.directive('notification', ['$timeout', function($timeout) {
		return {
			scope: {
				enable: '=',
				timeout: '='
			},
			restrict: 'E',
			transclude: true,
			template: '<div ng-show="enable" class="notification">' + 
				'<a href="" ng-click="clone()">閉じる</a>' + 
				'<div ng-transclude></div>' + 
				'</div>',
			replace: true,
			link: function(scope) {
				scope.close = function() {
					scope.enable = false;
				};
				var promise;
				scope.$watch('enable', function(newValue) {
					if (newValue) {
						promise = $timeout(function() {
							scope.$apply(function() {
								scope.close();
							});
						}, scope.timeout, false);
					} else {
						if (promise) {
							$timeout.cancel(promise);
							promise = null;
						}
					}
				});
			}
		}
	}]);