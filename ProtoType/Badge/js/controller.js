(function() {
  'use strict';

  function Controller(model, view) {
    var self = this;
    this.model = model;
    this.view = view;

    console.log(model);
    console.log(view);

    // frame view bind
    this.view.frame_view.$frame_1.on('click', self.setFrame.bind(this));
    this.view.frame_view.$frame_2.on('click', self.setFrame.bind(this));
    this.view.frame_view.$frame_3.on('click', self.setFrame.bind(this));

    // badge view bind
    this.view.badge_list_view.$childs.on('click', self.badgeEquip.bind(this));
  }

  // フレームの選択
  Controller.prototype.setFrame = function() {
    var $target = $(event.target);
    var index = $target.index();
    this.model.frame_model.setFrame(index);
    
    this.view.frame_view.$childs.css({ 'border': 'none' });
    $target.css({ 'border': '1px solid #333' })
  };

  // バッジの選択
  Controller.prototype.badgeEquip = function() {
    var current_frame = this.model.frame_model.getFrame();
    var index = $(event.target).index();
    
    // フレームに選択したバッジを描画
    
  };

  window.app = window.app || {};
  window.app.Controller = Controller;
})();