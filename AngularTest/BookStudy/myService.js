var MyService = function(a, b) {
	return a + b;
};

angular.module('app', [])
.value('addService', MyService);