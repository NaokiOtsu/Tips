(function(window) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var CLASS_NAME = {
    'active': 'active',
    'grayout': 'grayout'
  };

  // アイテムのView
  function ViewItem(model) {
    this.$btnOrange = $('#btn-orange');
    this.$btnMeat = $('#btn-meat');
    this.$currentOrange = this.$btnOrange.find('.current-num');
    this.$currentMeat = this.$btnMeat.find('.current-num');
    
    this.model = model;

    this.render();

    this.addEventListeners();
  }

  // イベント設定
  ViewItem.prototype.addEventListeners = function() {
    this.$btnOrange.on('click', this.onOrangeClick.bind(this));
    this.$btnMeat.on('click', this.onMeatClick.bind(this));
    _.defer(function() {
      window.app.observer.on('change:item', this.render.bind(this));
    }.bind(this));
  };

  // アイテムの描画
  ViewItem.prototype.render = function() {
    var current_orange_num = this.model.getCurrentNum('orange');
    var current_meat_num = this.model.getCurrentNum('meat');
    
    this.$btnOrange.removeClass();
    this.$btnMeat.removeClass();
    
    // みかんボタンのvalidation
    if (this.validateOrange()) {
      this.$btnOrange.addClass(CLASS_NAME.active);
    } else {
      this.$btnOrange.addClass(CLASS_NAME.grayout);
    }

    // 肉ボタンのvalidation
    if (this.validateMeat()) {
      this.$btnMeat.addClass(CLASS_NAME.active);
    } else {
      this.$btnMeat.addClass(CLASS_NAME.grayout);
    }
    
    this.$currentOrange.text(current_orange_num);
    this.$currentMeat.text(current_meat_num);
  };

  // みかんボタンのvalidation
  ViewItem.prototype.validateOrange = function() {
    if (this.model.getCurrentNum('orange') === 0) return false; // 個数が0個だったら
    if (window.app.model.battle_power.isMax()) return false; // 全回復していたら

    return true;
  };

  // 肉ボタンのvalidation
  ViewItem.prototype.validateMeat = function() {
    if (this.model.getCurrentNum('meat') === 0) return false; // 個数が0個だったら
    if (window.app.model.battle_power.getCurrentBattlePower() > 0) return false; // バトルタワーが1以上だったら

    return true;
  };

  // リセットかどうか
  ViewItem.prototype.isReset = function(type) {
    if (!this.model.isUsedItem(type)) return false; // アイテムを使ってない
    
    // アイテムを使っていて、かつ、バトルパワーが満タン
    if (window.app.model.battle_power.isMax()) return true;

    // アイテムを使っていて、かつ、アイテムが0個
    if (this.model.getCurrentNum(type) === 0) return true;

    return false;
  };

  // みかんボタンがクリック出来るか
  ViewItem.prototype.canOrangeClick = function() {
    if (!this.model.isUsedItem('orange') && window.app.model.battle_power.getCurrentBattlePower() > 0) return false;

    // みかん使ってない かつ みかんの個数が0
    if (!this.model.isUsedItem('orange') && this.model.getCurrentNum('orange') === 0) return false;

    return true;
  };

  // みかんのクリックイベント
  ViewItem.prototype.onOrangeClick = function() {
    if (!this.canOrangeClick()) return; // そもそもボタンを押せるかどうか
    
    if (this.isReset('orange')) {
      window.app.model.battle_power.reset();
      this.model.reset();
    } else {
      window.app.model.battle_power.recovery(1);
      this.model.useItem('orange', 1);
    }
  };

  // 肉ボタンがクリック出来るか
  ViewItem.prototype.canMeatClick = function() {
    // 肉使ってない かつ バトルパワーが0以上
    if (!this.model.isUsedItem('meat') && window.app.model.battle_power.getCurrentBattlePower() > 0) return false;

    // 肉使ってない かつ 肉の個数が0
    if (!this.model.isUsedItem('meat') && this.model.getCurrentNum('meat') === 0) return false;

    return true;
  };

  // 肉のクリックイベント
  ViewItem.prototype.onMeatClick = function() {
    if (!this.canMeatClick()) return; // そもそもボタンを押せるかどうか
    
    if (this.isReset('meat')) {
      window.app.model.battle_power.reset();
      this.model.reset();
    } else {
      window.app.model.battle_power.recovery(5);
      this.model.useItem('meat', 1);
    }
  };

  module.exports = ViewItem; // exports

})(window);