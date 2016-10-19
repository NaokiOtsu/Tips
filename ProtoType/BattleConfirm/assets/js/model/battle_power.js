(function(window) {
  'use strict';

  // バトルパワーのモデル
  function ModelBattlePower(battle_power) {
    this.battle_power = battle_power;
    this.battle_power.default = battle_power.current;
    this.battle_power.selected_num = 0;
  }

  // 現在のバトルパワーを返す
  ModelBattlePower.prototype.getCurrentBattlePower = function() {
    return Number(this.battle_power.current);
  };

  // 現在のバトルパワーがMAXかどうか
  ModelBattlePower.prototype.isMax = function() {
    if (this.battle_power.current === this.battle_power.max) return true;
    return false;
  };

  // バトルパワーの回復
  ModelBattlePower.prototype.recovery = function(value) {
    this.battle_power.current += value;
    window.app.observer.trigger('change:battle_power');
  };

  // バトルパワーのリセット
  ModelBattlePower.prototype.reset = function() {
    this.battle_power.current = this.battle_power.default;
    this.battle_power.selected_num = 0;
    window.app.observer.trigger('change:battle_power');
  };

  // 選択しているバトルパワーを返す
  ModelBattlePower.prototype.getSelectedNum = function() {
    return this.battle_power.selected_num;
  };

  // 選択しているバトルパワーをセットする
  ModelBattlePower.prototype.setSelectedNum = function(value) {
    this.battle_power.selected_num = value;
  };

  module.exports = ModelBattlePower; // exports

})(window);