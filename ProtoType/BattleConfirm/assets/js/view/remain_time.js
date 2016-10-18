(function(window) {
  'use strict';

  var $ = require('jquery');

  function RemainTime(model) {
    this.$remain = $('#remain-time');

    this.model = model;
    this.timer_id;
  }

  // タイマースタート
  RemainTime.prototype.start = function() {
    this.timer_id = window.setInterval(function() {
      this.update();
    }.bind(this), 100);
  };

  // タイマーのアップデート
  RemainTime.prototype.update = function() {
    var date = this.model.getDate();
    
    this.$remain.html(date.hour + '時間'+ date.minute +'分'+ date.second +'秒');
  };

  module.exports = RemainTime; // exports

})(window);