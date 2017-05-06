(function(window) {
  'use strict';

  var $ = require('jquery');

  // 残り時間を表示する
  function ViewRemainTime(model) {
    this.$remain = $('#remain-time');

    this.model = model;
    this.timer_id;
  }

  // タイマースタート
  ViewRemainTime.prototype.start = function() {
    this.timer_id = window.setInterval(function() {
      this.update();
    }.bind(this), 100);
  };

  // タイマーのアップデート
  ViewRemainTime.prototype.update = function() {
    var date = this.model.getDate();
    
    if (date.day > 0) {
      this.$remain.text(date.day + '日' + date.hour + '時間'+ date.minute +'分'+ date.second +'秒');
    } else if (date.hour > 0) {
      this.$remain.text(date.hour + '時間'+ date.minute +'分'+ date.second +'秒');
    } else if (date.minute > 0) {
      this.$remain.text(date.minute +'分'+ date.second +'秒');
    } else if (date.second > 0) {
      this.$remain.text(date.second +'秒');
    } else {
      // 既に逃亡
      this.stop();
      this.$remain.text('既に逃亡');
    }
    
  };

  // タイマーのストップ
  ViewRemainTime.prototype.stop = function() {
    window.clearInterval(this.timer_id);
  };

  module.exports = ViewRemainTime; // exports

})(window);