(function(window) {
  'use strict';

  function ItemView() {
    this.$orange = $('#orange-btn');
    this.$orange_num = $('#orange-btn .num');
    this.$meat_num = $('#meat-btn .num');
  }

  // アイテムを描画する
  ItemView.prototype.render = function(orange_num, meat_num) {
    this.$orange_num.text(orange_num);
    this.$meat_num.text(meat_num);
  };

  // イベント
  ItemView.prototype.bind = function(type, handler) {
    if (type === 'CLICK_ORANGE') {
      this.$orange.on('click', function() {
        handler();
      });
    }
  };

  window.app = window.app || {};
  window.app.ItemView = ItemView;
})(window);