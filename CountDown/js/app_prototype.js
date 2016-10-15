(function(window) {
  'use strict';

  var GOAL_TIME = '2016/11/22 5:00';
  var DATE = {
    day    : '日',
    hour   : '時間',
    minute : '分',
    second : '秒'
  };

  // ゴール日までのカウントダウン表示
  function CountDown() {
    this.timer_id;
    this.is_goal = false;
    
    this.init();
  }

  // 初期化
  CountDown.prototype.init = function() {
    this.build();
  };

  // HTMLを作る
  CountDown.prototype.build = function() {
    var date = this.getDate();

    // 達してる時は処理しない
    if (this.is_goal) return;

    this.createDomElement(date, 'day');
    this.createDomElement(date, 'hour');
    this.createDomElement(date, 'minute');
    this.createDomElement(date, 'second');
  };

  // DOM要素を作ってHTMLに追加する
  CountDown.prototype.createDomElement = function(date, str) {
    var container = document.getElementById('countdown-container');
    
    for (var i = 0; i < date[str].length; i++) {
      var span = document.createElement('span');
      span.className = 'countdown-sprite num-' + date[str].charAt(i);
      this[str + '_' + i] = span;

      container.appendChild(span);
    }

    var text = document.createElement('span');
    text.className = 'countdown-text';
    text.textContent = DATE[str];
    
    container.appendChild(text);
  };

  // 今の時間からゴール日までの日付を返す
  CountDown.prototype.getDate = function() {
    var diff;
    var diff_time = new Date(GOAL_TIME) - Date.now();
    var day = Math.floor(diff_time / (24 * 60 * 60 * 1000));
    diff = diff_time % (24 * 60 * 60 * 1000);
    var hour = Math.floor(diff / (60 * 60 * 1000));
    diff = diff % (60 * 60 * 1000);
    var minute = Math.floor(diff / (60 * 1000));
    diff = diff % (60 * 1000);
    var second = Math.floor(diff / 1000);

    // ゴールに達したら
    if (diff_time < 0) {
      console.log('達したよん');
      this.is_goal = true;
      return;
    }

    // 桁を揃える
    day = String(day);
    hour   = ('00' + hour).slice(-2);
    minute = ('00' + minute).slice(-2);
    second = ('00' + second).slice(-2);

    return {
      day    : day,
      hour   : hour,
      minute : minute,
      second : second
    };
  };

  // カウントダウンをスタート
  CountDown.prototype.start = function() {
    // 達してる時は処理しない
    if (this.is_goal) return;

    this.timer_id = setInterval(this.update.bind(this), 100);
  };

  // 一定時間でDOMを更新する
  CountDown.prototype.update = function() {
    var date = this.getDate();

    this.updateDomElement(date, 'day');
    this.updateDomElement(date, 'hour');
    this.updateDomElement(date, 'minute');
    this.updateDomElement(date, 'second');
  };

  // DOM要素を更新する
  CountDown.prototype.updateDomElement = function(date, str) {
    for (var i = 0; i < date[str].length; i++) {
      this[str + '_' + i].className = 'countdown-sprite num-' + date[str].charAt(i);
    }
  };

  // DOMの準備が出来たらカウントダウン
  window.addEventListener('DOMContentLoaded', function() {
    var count_down = new CountDown();
    count_down.start();
  });
})(window);