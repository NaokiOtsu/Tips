(function(window) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var DEFAULT_RATE = {
    'normal': 0,
    'special': 6
  };

  // 攻撃ボタンのView
  function ViewAttackBtn() {
    this.$attack_normal = $('#attack-normal');
    this.$attack_normal_rate = this.$attack_normal.find('.rate-num');
    this.$attack_special = $('#attack-special');
    this.$attack_special_rate = this.$attack_special.find('.rate-num');

    this.render();
  }

  // 攻撃ボタンの描画
  ViewAttackBtn.prototype.render = function(index) {
    var index = Number(index) || 0;
    
    if (index < window.app.config.battle_power.max - 1) {
      this.$attack_normal_rate.text(DEFAULT_RATE.normal + index + window.app.config.rate.normal);
      this.$attack_special_rate.text(DEFAULT_RATE.special + index + window.app.config.rate.normal);
    } else {
      this.$attack_normal_rate.text(DEFAULT_RATE.normal + window.app.config.rate.special);
      this.$attack_special_rate.text(DEFAULT_RATE.special + window.app.config.rate.special);
    }
  };

  module.exports = ViewAttackBtn; // exports

})(window);