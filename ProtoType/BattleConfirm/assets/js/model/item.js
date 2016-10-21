(function(window) {
  'use strict';

  // アイテムのモデル
  function ModelItem(item) {
    this.item = item;

    this.item.orange.default_num = item.orange.current_num;
    this.item.meat.default_num = item.meat.current_num;
  }

  // 現在の個数を返す
  ModelItem.prototype.getCurrentNum = function(type) {
    return Number(this.item[type].current_num);
  };

  // 現在の個数から減らす
  ModelItem.prototype.useItem = function(type, num) {
    this.item[type].current_num -= num;
    window.app.observer.trigger('change:item');
  };

  // リセット
  ModelItem.prototype.reset = function() {
    this.item.orange.current_num = this.item.orange.default_num;
    this.item.meat.current_num = this.item.meat.default_num;
    window.app.observer.trigger('change:item');
  };

  // アイテムを使っているかどうか
  ModelItem.prototype.isUsedItem = function(type) {
    return this.item[type].current_num !== this.item[type].default_num;
  };

  module.exports = ModelItem; // exports

})(window);