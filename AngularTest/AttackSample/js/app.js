var AttackConfirmController = function(BattlePowerService, ItemsService, AttackRateService) {
	// 初期化
	this.battle_power = BattlePowerService;
	this.items        = ItemsService;
	this.attack_rate  = AttackRateService;
	
	// 初期設定
	this.init = function() {
		this.btnActiveCheck();
		
		// 料理の活性化
		if (this.items.cuisine.default > 0) this.items.cuisine.can_use = true;
		
		// パワーアタックの活性化
		if (this.items.meat.current > 0) this.items.meat.can_use_power_attack = true;
	};
	
	// ボタンの活性化
	this.btnActiveCheck = function() {
		this.items.orange.can_use = false;
		this.items.orange.is_gray_out = false;
		
		this.items.meat.can_use = false;
		this.items.meat.is_gray_out = false;
		
		// みかんのdisableチェック
		if (this.orangeBtnValidate()) this.items.orange.can_use = true;
		
		// みかんのgray-outチェック
		if (this.orangeBtnGrayOutValidate()) this.items.orange.is_gray_out = true;
		
		// 肉のdisableチェック
		if (this.meatBtnValidate()) this.items.meat.can_use = true;
		
		// 肉のgray-outチェック
		if (this.meatBtnGrayOutValidate()) this.items.meat.is_gray_out = true;
	};
	
	// みかんのバリデーション
	this.orangeBtnValidate = function() {
		if (this.battle_power.max - this.battle_power.default  === 0) return false; // バトルパワーがマックス
		if (this.items.orange.default === 0) return false; // オレンジを持ってない
		
		return true;
	};
	
	// 肉のバリデーション
	this.meatBtnValidate = function() {
		if (this.battle_power.default > 0) return false; // バトルパワーが0以上
		if (this.items.meat.default === 0) return false; // 肉を持ってない
		
		return true;
	};
	
	// みかんのgray-outバリデーション
	this.orangeBtnGrayOutValidate = function() {
		var is_use_orange = this.items.orange.default - this.items.orange.current > 0;
		
		if (this.items.meat.default - this.items.meat.current > 0 && !this.items.meat.is_use_power_attack) return true; // 肉を使っている時(パワーアタックではなく)
		
		// パワーアタックも肉も使った時(肉が2以上減っていた時で判定)
		if (this.items.meat.default - this.items.meat.current >= 2) return true;
		
		// みかんを使用してバトルパワーがマックスになっている時
		if (is_use_orange && this.battle_power.current === this.battle_power.max) return true; 
		
		// みかんを使って、みかんの所持数が0になった時
		if (is_use_orange && this.items.orange.current === 0) return true; 
		
		return false;
	};
	
	// 肉のgray-outバリデーション
	this.meatBtnGrayOutValidate = function() {
		var is_use_meat = this.items.meat.default - this.items.meat.current > 0;
		
		if (this.items.orange.default - this.items.orange.current > 0) return true; // みかんを使っている時
		
		// 肉を使用していたら(パワーアタックではなく)
		if (is_use_meat && !this.items.meat.is_use_power_attack) return true;
		
		// パワーアタックも肉も使った時(肉が2以上減っていた時で判定)
		if (this.items.meat.default - this.items.meat.current >= 2) return true;
		
		return false;
	};
	
	// みかんをクリックしたら
	this.clickOrange = function() {
		// リセットだったら
		if (this.orangeBtnGrayOutValidate()) {
			this.reset();
			this.btnActiveCheck();
			return;
		}
		
		this.items.clickOrange();
		this.btnActiveCheck();
	};
	
	// 肉をクリックしたら
	this.clickMeat = function() {
		// リセットだったら
		if (this.meatBtnGrayOutValidate()) {
			this.reset();
			this.btnActiveCheck();
			return;
		}
		
		this.items.clickMeat();
		this.btnActiveCheck();
	};
	
	// 料理をクリックしたら
	this.clickCuisine = function() {
		if (this.items.cuisine.is_use) {
			this.items.resetCuisine();
			this.items.cuisine.is_use = false;
		} else {
			this.items.clickCuisine();
			this.items.cuisine.is_use = true;
		}
	};
	
	// パワーアタックをクリックしたら
	this.clickPowerAttack = function() {
		if (this.items.meat.is_use_power_attack) {
			this.items.resetPowerAttack();
			this.items.meat.is_use_power_attack = false;
		} else {
			this.items.clickPowerAttack();
			this.items.meat.is_use_power_attack = true;
		}
		this.btnActiveCheck();
	};
	
	// リセット
	this.reset = function() {
		this.battle_power.reset();
		this.items.reset();
	};
};

angular.module('app', [])
	.controller('AttackConfirmController', AttackConfirmController);