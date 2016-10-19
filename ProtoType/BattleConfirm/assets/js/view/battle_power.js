(function(window) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var CLASS_NAME = {
    'active': 'active',
    'selected': 'selected'
  };

  // バトルパワーのView
  function ViewBattlePower(model) {
    this.$container = $('#bp-btn-list');
    this.$children = this.$container.find('li');
    
    this.model = model;

    this.render();

    this.addEventListeners();
  }

  // イベント設定
  ViewBattlePower.prototype.addEventListeners = function() {
    this.$children.on('click', this.onClick.bind(this));
    _.defer(function() {
      window.app.observer.on('change:battle_power', this.render.bind(this));
    }.bind(this));
  };

  // バトルパワーの描画
  ViewBattlePower.prototype.render = function() {
    var current_battle_power = this.model.getCurrentBattlePower();
    
    this.$children.removeClass();

    // 現在のバトルパワーを表示
    _.times(current_battle_power, function(index) {
      this.$children.eq(index).addClass(CLASS_NAME.active);
    }.bind(this));

    // 選択されているボタンを表示
    this.renderSelectButton()
  };

  // 選択されているボタンを描画
  ViewBattlePower.prototype.renderSelectButton = function() {
    this.$children.removeClass(CLASS_NAME.selected);
    
    // 選択状態に出来るか
    if (this.model.getCurrentBattlePower()) {
      var selected_num = this.model.getSelectedNum();
      this.$children.eq(selected_num).addClass(CLASS_NAME.selected);
    }
  };

  // クリックイベント
  ViewBattlePower.prototype.onClick = function() {
    var $target = $(event.currentTarget);
    
    if (! $target.hasClass(CLASS_NAME.active)) return; // disableの時は処理しない

    this.model.setSelectedNum($target.index());
    this.renderSelectButton();
  };

  module.exports = ViewBattlePower; // exports

})(window);