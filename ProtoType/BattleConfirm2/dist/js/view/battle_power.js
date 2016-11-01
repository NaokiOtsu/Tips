(function(window) {
  'use strict';

  function BattlePowerView() {
    this.$list = $('#battle-power li');
  }

  // バトルパワーを描画する
  BattlePowerView.prototype.render = function(current_num) {
    var self = this;

    _.times(current_num, function(index) {
      self.$list.eq(index).addClass('active');
    });

    self.$list.each(function() {
      var $target = $(this);
      if ($target.hasClass('active')) return; 
      
      $target.addClass('gray');
    });
  };

  // バトルパワーのイベント
  BattlePowerView.prototype.bind = function(handler) {
    this.$list.on('click', function() {
      if ($(this).hasClass('gray')) return;
      handler();
    });
  };

  // バトルパワーの選択
  BattlePowerView.prototype.selectBattlePower = function(num) {
    this.$list.removeClass('selected');
    this.$list.eq(num).addClass('selected');
  };

  window.app = window.app || {};
  window.app.BattlePowerView = BattlePowerView;
})(window);