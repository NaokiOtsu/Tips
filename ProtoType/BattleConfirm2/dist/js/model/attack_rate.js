(function(window) {
  'use strict';

  function AttackRateModel(rate) {
    this.rate = rate;
  }

  // 通常の攻撃倍率を返す
  AttackRateModel.prototype.getCurrentNormalRate = function() {
    return this.rate.normal;
  };

  // スペシャルの攻撃倍率を返す
  AttackRateModel.prototype.getCurrentSpecialRate = function() {
    return this.rate.special;
  };

  window.app = window.app || {};
  window.app.AttackRateModel = AttackRateModel;
})(window);