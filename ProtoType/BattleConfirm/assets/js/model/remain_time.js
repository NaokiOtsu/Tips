(function(window) {
  'use strict';

  // 残り時間のモデル
  function ModelRemainTime(date) {
    this.date = date;
  }

  // ゴール日をUNIXタイムで返す
  ModelRemainTime.prototype.getGoalUnixTime = function() {
    var time = new Date(this.date).getTime();

    this.getGoalUnixTime = function() { return time; } // 2回目移行はキャッシュされたtimeを返す
    
    return time;
  };

  // 残り時間を返す
  ModelRemainTime.prototype.getDate = function() {
    var date = {};
    var gold_time = this.getGoalUnixTime();
    var diff_time = gold_time - Date.now();
    var diff;
    
    date.day = Math.floor(diff_time / (1000 * 60 * 60 * 24));

    diff = diff_time % (1000 * 60 * 60 * 24);
    date.hour = Math.floor(diff / (1000 * 60 * 60));
    
    diff = diff % (1000 * 60 * 60);
    date.minute = Math.floor(diff / (1000 * 60));
    
    diff = diff % (1000 * 60);
    date.second = Math.floor(diff / 1000);

    return date;
  };

  module.exports = ModelRemainTime; // exports

})(window);