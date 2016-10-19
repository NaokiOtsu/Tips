(function(window) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var CLASS_NAME = {
    'active': 'active',
    'grayout': 'grayout'
  };

  // みかんのView
  function ViewOrange(model) {
    this.$btn = $('#btn-orange');
    this.$current = this.$btn.find('.current-num');
    
    this.model = model;

    this.render();

    this.addEventListeners();
  }

  // イベント設定
  ViewOrange.prototype.addEventListeners = function() {
    this.$btn.on('click', this.onClick.bind(this));
    _.defer(function() {
      window.app.observer.on('change:orange', this.render.bind(this));
    }.bind(this));
  };

  // みかんの描画
  ViewOrange.prototype.render = function() {
    var current_orange_num = this.model.getCurrentNum();
    
    this.$btn.removeClass();
    if (current_orange_num === 0) {
      this.$btn.addClass(CLASS_NAME.grayout); // みかんの個数が0だったらグレイアウト
    } else {
      this.$btn.addClass(CLASS_NAME.active);
    }
    
    this.$current.text(current_orange_num);
  };

  // リセットかどうか
  ViewOrange.prototype.isReset = function() {
    if (! this.model.useItem()) return false; // アイテムを使ってなかったらfalse
    
    // そのアイテムを使っている、かつ、バトルパワーが満タン
    if (window.app.model.battle_power.isMax()) return true;

    // そのアイテムを使っている、かつ、そのアイテムが0個
    if (this.model.getCurrentNum() === 0) return true;

    return false;
  };

  // クリックイベント
  ViewOrange.prototype.onClick = function() {
    // if (!this.canClick()) return; // そもそもボタンを押せるかどうか
    
    if (this.isReset()) {
      this.model.reset();
      window.app.model.battle_power.reset();
    } else {
      this.model.decrement();
      window.app.model.battle_power.recovery(1);
    }
  };

  module.exports = ViewOrange; // exports

})(window);