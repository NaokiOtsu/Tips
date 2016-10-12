(function(window) {
  'use strict';

  var GOAL_TIME = '2016/11/4 14:00';

  function CountDown() {
    this.day_0    = document.getElementById('countdown-day-0');
    this.day_1    = document.getElementById('countdown-day-1');
    this.hour_0   = document.getElementById('countdown-hour-0');
    this.hour_1   = document.getElementById('countdown-hour-1');
    this.minute_0 = document.getElementById('countdown-minute-0');
    this.minute_1 = document.getElementById('countdown-minute-1');
    this.second_0 = document.getElementById('countdown-second-0');
    this.second_1 = document.getElementById('countdown-second-1');

    this.timer_id;
    this.start_time = Date.now();
    console.log(this.start_time);
    
    this.init();
  }

  CountDown.prototype.init = function() {
    
  };

  CountDown.prototype.start = function() {
    this.timer_id = setInterval(this.update.bind(this), 500);
  };

  CountDown.prototype.update = function() {
    var diff;
    var diff_time = new Date(GOAL_TIME) - Date.now();
    var day = Math.floor(diff_time / (24 * 60 * 60 * 1000));
    diff = diff_time % (24 * 60 * 60 * 1000);
    var hour = Math.floor(diff / (60 * 60 * 1000));
    diff = diff % (60 * 60 * 1000);
    var minute = Math.floor(diff / (60 * 1000));
    diff = diff % (60 * 1000);
    var second = Math.floor(diff / 1000);
    // console.log(second);
  };

  window.addEventListener('DOMContentLoaded', function() {
    var count_down = new CountDown();
    count_down.start();
  });
})(window);