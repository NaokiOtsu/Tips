var BattlePowerService = function() {
	var power = 0;
	
	var battle_power = {
		current: power,
		default: power,
		max: 5
	};
	
	battle_power.reset = function() {
		this.current = this.default;
	};
	
	return battle_power;
};

angular.module('app')
	.factory('BattlePowerService', BattlePowerService);