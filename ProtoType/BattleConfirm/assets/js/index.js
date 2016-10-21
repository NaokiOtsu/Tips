(function(window) {
  'use strict';

  var _ = require('underscore');

  var ModelRemainTime = require('./model/remain_time');
  var ModelBattlePower = require('./model/battle_power');
  var ModelItem = require('./model/item');

  var ViewRemainTime = require('./view/remain_time');
  var ViewBattlePower = require('./view/battle_power');
  var ViewItem = require('./view/item');
  var ViewAttackBtn = require('./view/attack_btn');

  var Observer = require('./observer');

  function App(config) {
    this.config = config;

    // Observerの作成
    this.observer = new Observer();

    this.model = {};
    this.view = {};

    this.createModel(); // Modelの作成
  }

  App.prototype.init = function() {
    this.createView(); // Viewの作成(Modelを作ってwindowに格納してから)
    
    // タイマースタート
    this.view.remain_time.start();
  };

  // Modelの作成
  App.prototype.createModel = function() {
    this.model.remain_time = new ModelRemainTime(this.config.date);
    this.model.battle_power = new ModelBattlePower(this.config.battle_power);
    this.model.item = new ModelItem(this.config.item);
  };

  // Viewの作成
  App.prototype.createView = function() {
    this.view.remain_time = new ViewRemainTime(this.model.remain_time);
    this.view.battle_power = new ViewBattlePower(this.model.battle_power);
    this.view.item = new ViewItem(this.model.item);
    this.view.attack_btn = new ViewAttackBtn();
  };

  window.App = App; // export
})(window);