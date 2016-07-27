(function() {
	'use strict';
	
	// 初期値
	var power   = 0;
	var orange  = 10;
	var meat    = 10;
	var cuisine = 10;
	
	var vm = new Vue({
		el: '#app',
		data: {
			battle_power: {
				current: power,
				default: power,
				max: 5
			},
			items: {
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
			},
			attack_rate: {
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
			},
		},
		
		// 初期化処理
		created: function() {
			this.btnActiveCheck();
			
			// 料理の活性化
			if (this.items.cuisine.default > 0) this.items.cuisine.can_use = true;
			
			// パワーアタックの活性化
			if (this.items.meat.current > 0) this.items.meat.can_use_power_attack = true;
		},
		
		methods: {
			clickOrange: function() {
				// リセットだったら
				if (this.orangeBtnGrayOutValidate()) {
					this.reset();
					this.btnActiveCheck();
					return;
				}
				
				this.items.orange.counter += 1;
				
				if (this.items.orange.counter === 1) {
					// 1度目のクリック
					this.items.orange.current -= 1;
					this.battle_power.current += 1;
				} else if (this.items.orange.counter === 2) {
					// 2度目のクリック
					var use_orange_num = Math.min(this.items.orange.current, this.battle_power.max - this.battle_power.current);
					
					this.items.orange.current -= use_orange_num;
					this.battle_power.current += use_orange_num;
				} else {
					throw new Error('例外..');
				}
			},
			
			// 肉をクリックしたら
			clickMeat: function() {
				// リセットだったら
				if (this.meatBtnGrayOutValidate()) {
					this.reset();
					this.btnActiveCheck();
					return;
				}
				
				this.items.meat.current -= 1;
				this.battle_power.current = this.battle_power.max;
				this.btnActiveCheck();
			},
			
			// 料理をクリックしたら
			clickCuisine: function() {
				if (this.items.cuisine.is_use) {
					this.items.cuisine.current = this.items.cuisine.default;
					this.attack_rate.bp1.current = this.attack_rate.bp1.current / this.attack_rate.rate.cuisine;
					this.attack_rate.bp5.current = this.attack_rate.bp5.current / this.attack_rate.rate.cuisine;
					this.items.cuisine.is_use = false;
				} else {
					this.items.cuisine.current -= 1;
					this.attack_rate.bp1.current *= this.attack_rate.rate.cuisine;
					this.attack_rate.bp5.current *= this.attack_rate.rate.cuisine;
					this.items.cuisine.is_use = true;
				}
			},
			
			// パワーアタックをクリックしたら
			clickPowerAttack: function() {
				if (this.items.meat.is_use_power_attack) {
					this.items.meat.current += 1;
					this.attack_rate.bp1.current = this.attack_rate.bp1.current / this.attack_rate.rate.power_attack;
					this.attack_rate.bp5.current = this.attack_rate.bp5.current / this.attack_rate.rate.power_attack;
					this.items.meat.is_use_power_attack = false;
				} else {
					this.items.meat.current -= 1;
					this.attack_rate.bp1.current *= this.attack_rate.rate.power_attack;
					this.attack_rate.bp5.current *= this.attack_rate.rate.power_attack;
					this.items.meat.is_use_power_attack = true;
				}
				this.btnActiveCheck();
			},
			
			orangeBtnValidate: function() {
				if (this.battle_power.max - this.battle_power.default  === 0) return false; // バトルパワーがマックス
				if (this.items.orange.default === 0) return false; // オレンジを持ってない
				
				return true;
			},
			
			orangeBtnGrayOutValidate: function() {
				var is_use_orange = this.items.orange.default - this.items.orange.current > 0;
				
				if (this.items.meat.default - this.items.meat.current > 0 && !this.items.meat.is_use_power_attack) return true; // 肉を使っている時(パワーアタックではなく)
				
				// パワーアタックも肉も使った時(肉が2以上減っていた時で判定)
				if (this.items.meat.default - this.items.meat.current >= 2) return true;
				
				// みかんを使用してバトルパワーがマックスになっている時
				if (is_use_orange && this.battle_power.current === this.battle_power.max) return true; 
				
				// みかんを使って、みかんの所持数が0になった時
				if (is_use_orange && this.items.orange.current === 0) return true; 
				
				return false;
			},
			
			meatBtnValidate: function() {
				if (this.battle_power.default > 0) return false; // バトルパワーが0以上
				if (this.items.meat.default === 0) return false; // 肉を持ってない
				
				return true;
			},
			
			meatBtnGrayOutValidate: function() {
				var is_use_meat = this.items.meat.default - this.items.meat.current > 0;
				
				if (this.items.orange.default - this.items.orange.current > 0) return true; // みかんを使っている時
				
				// 肉を使用していたら(パワーアタックではなく)
				if (is_use_meat && !this.items.meat.is_use_power_attack) return true;
				
				// パワーアタックも肉も使った時(肉が2以上減っていた時で判定)
				if (this.items.meat.default - this.items.meat.current >= 2) return true;
				
				return false;
			},
			
			btnActiveCheck: function() {
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
			},
			
			reset: function() {
				this.battle_power.current = this.battle_power.default;
				this.items.orange.current  = this.items.orange.default;
				this.items.orange.counter  = 0;
				
				if (this.items.meat.is_use_power_attack) {
					this.items.meat.current = this.items.meat.default - 1;
				} else {
					this.items.meat.current = this.items.meat.default;
				}
				this.items.meat.counter    = 0;
				
				this.items.cuisine.current = this.items.cuisine.default;
				this.items.cuisine.counter = 0;
			}
		}
	});
})();