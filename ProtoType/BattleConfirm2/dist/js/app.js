(function() {
  'use strict';

  function App(config) {
    // Modelの生成
    var model = {};
    model.battle_power = new app.BattlePowerModel(config.battle_power);
    model.item = new app.ItemModel(config.item);
    model.attack_rate = new app.AttackRateModel(config.rate);

    // Viewの生成
    var view = {};
    view.battle_power = new app.BattlePowerView();
    view.item = new app.ItemView();
    view.attack_btn = new app.AttackBtnView();

    var controller = new app.Controller(model, view);
  }

  window.app = window.app || {};
  window.app.App = App;
})();