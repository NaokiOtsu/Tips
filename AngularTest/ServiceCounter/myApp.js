var app = angular.module('myApp', []);

function Counter(){
	this.count = 0;
}

Counter.prototype.increment = function(){
	this.count++;
};

Counter.prototype.add = function(count){
	this.count += count;
};

app.service('counter', Counter);

app.controller('MainCtrl', function($scope, counter){
	$scope.counter = counter;
});



