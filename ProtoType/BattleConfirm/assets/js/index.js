(function(window) {
  'use strict';

  var ModelRemainTime = require('./model/remain_time');
  var ModelBattlePower = require('./model/battle_power');
  var ModelOrange = require('./model/orange');

  var ViewRemainTime = require('./view/remain_time');
  var ViewBattlePower = require('./view/battle_power');
  var ViewOrange = require('./view/orange');

  var Observer = require('./observer');

  function App(config) {
    this.config = config;

    // Observerの作成
    this.observer = new Observer();

    this.model = {};
    this.view = {};

    // Model,Viewの作成
    this.createModel();
    this.createView();

    // タイマースタート
    this.view.remain_time.start();
  }

  // Modelの作成
  App.prototype.createModel = function() {
    this.model.remain_time = new ModelRemainTime(this.config.date);
    this.model.battle_power = new ModelBattlePower(this.config.battle_power);
    this.model.orange = new ModelOrange(this.config.item.orange);
  };

  // Viewの作成
  App.prototype.createView = function() {
    this.view.remain_time = new ViewRemainTime(this.model.remain_time);
    this.view.battle_power = new ViewBattlePower(this.model.battle_power);
    this.view.orange = new ViewOrange(this.model.orange);
  };

  window.App = App; // export
})(window);