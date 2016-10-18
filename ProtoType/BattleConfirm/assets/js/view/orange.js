(function(window) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var CLASS_NAME = {
    'active': 'active'
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
    
    // if (current_orange_num <= 0) return;

    this.$btn.addClass(CLASS_NAME.active);
    this.$current.text(current_orange_num);
  };

  // クリックイベント
  ViewOrange.prototype.onClick = function() {
    this.model.decrement();
  };

  module.exports = ViewOrange; // exports

})(window);