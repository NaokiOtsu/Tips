var app = angular.module('myApp', []);

app.provider('counter', function(){
	var count = 0;
	
	this.setDefaultCount = function (defaultCount) {
		count = defaultCount;
	};
	
	this.$get = function () {
		return {
			count: count,
			increment: function () {
				this.count++;
			},
			add: function () {
				this.count += count;
			}
		};
	};
});

app.constant('COUNTER_DEFAULT', 100);

app.config(function(counterProvider, COUNTER_DEFAULT) {
	counterProvider.setDefaultCount(COUNTER_DEFAULT);
});

app.controller('MainCtrl', function($scope, counter){
	$scope.counter = counter;
});



