(function(window) {
  'use strict';
  
  function Controller(model, view) {
    console.log('Model', model);
    console.log('View', view);

    var self = this;
    
    self.model = model;
    self.view = view;

    // Viewの描画
    self.renderBattlePower();
    self.renderItem();
    self.renderAttackBtn();

    // イベント
    self.view.battle_power.bind(function() {
      self.selectBattlePower();
    });
    self.view.item.bind('CLICK_ORANGE', function() {
      self.clickOrange();
    });

    // 監視
    $(window).on('change:battle_power', function() {
      self.changeBattlePower();
    });
  }

  // バトルパワーの描画
  Controller.prototype.renderBattlePower = function() {
    var current_num = this.model.battle_power.getCurrentBattlePower();
    this.view.battle_power.render(current_num);
  }

  // アイテムの描画
  Controller.prototype.renderItem = function() {
    var orange_num = this.model.item.getCurrentNum('orange');
    var meat_num = this.model.item.getCurrentNum('meat');
    this.view.item.render(orange_num, meat_num);
  }

  // 攻撃倍率の描画
  Controller.prototype.renderAttackBtn = function() {
    var normal_rate = this.model.attack_rate.getCurrentNormalRate();
    var special_rate = this.model.attack_rate.getCurrentSpecialRate();
    this.view.attack_btn.render(normal_rate, special_rate);
  }

  // バトルパワーの選択
  Controller.prototype.selectBattlePower = function() {
    var index = $(event.target).index();
    this.model.battle_power.setSelectNum(index);
  }

  // バトルパワーが変更されたら
  Controller.prototype.changeBattlePower = function() {
    var num = this.model.battle_power.getSelectNum();
    this.view.battle_power.selectBattlePower(num);
  }

  // みかんのクリック
  Controller.prototype.clickOrange = function() {
    var use_num = 1;
    this.model.item.setNum(use_num);
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);