(function(window) {
  'use strict';

  // みかんのモデル
  function ModelOrange(orange) {
    this.orange = orange;
    this.orange.default_num = orange.current_num;
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

  // リセット
  ModelOrange.prototype.reset = function() {
    this.orange.current_num = this.orange.default_num;
    window.app.observer.trigger('change:orange');
  };

  // アイテムを使っているかどうか
  ModelOrange.prototype.useItem = function() {
    return this.orange.current_num !== this.orange.default_num;
  };

  module.exports = ModelOrange; // exports

})(window);