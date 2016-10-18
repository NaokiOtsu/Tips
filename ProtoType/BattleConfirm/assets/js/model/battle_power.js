(function(window) {
  'use strict';

  // バトルパワーのモデル
  function ModelBattlePower(battle_power) {
    this.battle_power = this.default_battle_power = battle_power;
  }

  // 現在のバトルパワーを返す
  ModelBattlePower.prototype.getCurrentBattlePower = function() {
    return Number(this.battle_power);
  };

  module.exports = ModelBattlePower; // exports

})(window);