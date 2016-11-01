(function(window) {
  'use strict';

  function BattlePowerModel(battle_power) {
    this.battle_power = battle_power;
    this.battle_power.select_num = 0;
  }

  // 現在のバトルパワーを返す
  BattlePowerModel.prototype.getCurrentBattlePower = function() {
    return this.battle_power.current_num;
  };

  // 最大のバトルパワーを返す
  BattlePowerModel.prototype.getMaxBattlePower = function() {
    return this.battle_power.max_num;
  };

  // バトルパワーを回復する
  BattlePowerModel.prototype.refillBattlePower = function(num) {
    this.battle_power.current_num += num;
    $(window).trigger('change:item');
  };

  // 現在選択されているバトルタワーを返す
  BattlePowerModel.prototype.getSelectNum = function() {
    return this.battle_power.select_num;
  };

  // 選択されているバトルタワーを変更する
  BattlePowerModel.prototype.setSelectNum = function(num) {
    this.battle_power.select_num = num;
    $(window).trigger('change:battle_power');
  };

  window.app = window.app || {};
  window.app.BattlePowerModel = BattlePowerModel;
})(window);