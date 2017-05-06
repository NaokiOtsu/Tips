(function(window) {
  'use strict';

  function ItemModel(item) {
    this.item = item;
  }

  // 指定のアイテムの現在の個数を返す
  ItemModel.prototype.getCurrentNum = function(item_name) {
    return this.item[item_name].current_num;
  };

  window.app = window.app || {};
  window.app.ItemModel = ItemModel;
})(window);