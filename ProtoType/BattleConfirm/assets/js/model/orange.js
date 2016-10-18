(function(window) {
  'use strict';

  // みかんのモデル
  function ModelOrange(orange) {
    this.orange = this.default_orange = orange;
  }

  // 現在のみかんの個数を返す
  ModelOrange.prototype.getCurrentNum = function() {
    return Number(this.orange.current_num);
  };

  // デクリメント
  ModelOrange.prototype.decrement = function() {
    this.orange.current_num--;
    window.app.observer.trigger('change:orange');
  };

  module.exports = ModelOrange; // exports

})(window);