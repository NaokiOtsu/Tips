(function(window) {
  'use strict';

  var ModelRemainTime = require('./model/remain_time');
  var ViewRemainTime = require('./view/remain_time');

  function App(config) {
    this.config = config;

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
  };

  // Viewの作成
  App.prototype.createView = function() {
    this.view.remain_time = new ViewRemainTime(this.model.remain_time);
  };

  window.App = App; // export
})(window);