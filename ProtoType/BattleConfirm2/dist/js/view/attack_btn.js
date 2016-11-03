(function(window) {
  'use strict';

  function AttackBtnView() {
    this.$normal_rate = $('#normal-attack .rate');
    this.$special_rate = $('#special-attack .rate');
  }

  // 攻撃ボタンを描画する
  AttackBtnView.prototype.render = function(normal_rate, special_rate) {
    this.$normal_rate.text(normal_rate + '倍');
    this.$special_rate.text(special_rate + '倍');
  };

  window.app = window.app || {};
  window.app.AttackBtnView = AttackBtnView;
})(window);