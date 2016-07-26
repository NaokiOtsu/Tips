var ItemsService = function(BattlePowerService, AttackRateService) {
	var orange  = 10;
	var meat    = 10;
	var cuisine = 10;
	
	var items = {
		orange: {
			current: orange,
			default: orange,
			counter: 0,
			can_use: false,
			is_gray_out: false
		},
		meat: {
			current: meat,
			default: meat,
			can_use: false,
			is_gray_out: false,
			is_use_power_attack: false,
			can_use_power_attack: false
		},
		cuisine: {
			current: cuisine,
			default: cuisine,
			can_use: false,
			is_use: false
		}
	};
	
	// みかんをクリックしたら
	items.clickOrange = function() {
		this.orange.counter += 1;
		
		if (this.orange.counter === 1) {
			// 1度目のクリック
			this.orange.current        -= 1;
			BattlePowerService.current += 1;
		} else if (this.orange.counter === 2) {
			// 2度目のクリック
			var use_orange_num = Math.min(this.orange.current, BattlePowerService.max - BattlePowerService.current);
			
			this.orange.current -= use_orange_num;
			BattlePowerService.current += use_orange_num;
		} else {
			throw new Error('例外..');
		}
	};
	
	// 肉をクリックしたら
	items.clickMeat = function() {
		this.meat.current -= 1;
		BattlePowerService.current = BattlePowerService.max;
	};
	
	// 料理をクリックしたら
	items.clickCuisine = function() {
		this.cuisine.current -= 1;
		AttackRateService.bp1.current *= AttackRateService.rate.cuisine;
		AttackRateService.bp5.current *= AttackRateService.rate.cuisine;
	};
	
	// パワーアタックをクリックしたら
	items.clickPowerAttack = function() {
		this.meat.current -= 1;
		AttackRateService.bp1.current *= AttackRateService.rate.power_attack;
		AttackRateService.bp5.current *= AttackRateService.rate.power_attack;
	};
	
	// リセット
	items.reset = function() {
		this.orange.current  = this.orange.default;
		this.orange.counter  = 0;
		
		if (this.meat.is_use_power_attack) {
			this.meat.current = this.meat.default - 1;
		} else {
			this.meat.current = this.meat.default;
		}
		this.meat.counter    = 0;
		
		this.cuisine.current = this.cuisine.default;
		this.cuisine.counter = 0;
	};
	
	// 料理のリセット
	items.resetCuisine = function() {
		this.cuisine.current = this.cuisine.default;
		AttackRateService.bp1.current = AttackRateService.bp1.current / AttackRateService.rate.cuisine;
		AttackRateService.bp5.current = AttackRateService.bp5.current / AttackRateService.rate.cuisine;
	};
	
	// パワーアタックのリセット
	items.resetPowerAttack = function() {
		this.meat.current += 1;
		AttackRateService.bp1.current = AttackRateService.bp1.current / AttackRateService.rate.power_attack;
		AttackRateService.bp5.current = AttackRateService.bp5.current / AttackRateService.rate.power_attack;
	};
	
	return items;
};

angular.module('app')
	.factory('ItemsService', ItemsService);