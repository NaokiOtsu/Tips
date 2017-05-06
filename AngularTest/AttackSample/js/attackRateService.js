var AttackRateService = function() {
	var config = {
		bp1: {
			current: 1,
			default: 1
		},
		bp5: {
			current: 6,
			default: 6
		},
		rate: {
			cuisine: 1.5,
			power_attack: 2
		}
	};
	
	return config;
};

angular.module('app')
	.factory('AttackRateService', AttackRateService);