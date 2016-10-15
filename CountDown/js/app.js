'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  var GOAL_TIME = '2016/11/22 5:00';
  var DATE = {
    day: '日',
    hour: '時間',
    minute: '分',
    second: '秒'
  };

  var CountDown = function () {
    function CountDown() {
      _classCallCheck(this, CountDown);

      this.timer_id;
      this.is_goal = false;

      this.init();
    }

    // 初期化


    _createClass(CountDown, [{
      key: 'init',
      value: function init() {
        this.build();
      }

      // HTMLを作る

    }, {
      key: 'build',
      value: function build() {
        var date = this.getDate();

        // 達してる時は処理しない
        if (this.is_goal) return;

        this.createDomElement(date, 'day');
        this.createDomElement(date, 'hour');
        this.createDomElement(date, 'minute');
        this.createDomElement(date, 'second');
      }
    }, {
      key: 'createDomElement',


      // DOM要素を作ってHTMLに追加する
      value: function createDomElement(date, str) {
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
      }
    }, {
      key: 'getDate',


      // 今の時間からゴール日までの日付を返す
      value: function getDate() {
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
        hour = ('00' + hour).slice(-2);
        minute = ('00' + minute).slice(-2);
        second = ('00' + second).slice(-2);

        return {
          day: day,
          hour: hour,
          minute: minute,
          second: second
        };
      }
    }, {
      key: 'start',


      // カウントダウンをスタート
      value: function start() {
        var _this = this;

        // 達してる時は処理しない
        if (this.is_goal) return;

        this.timer_id = setInterval(function () {
          _this.update();
        }, 100);
      }
    }, {
      key: 'update',


      // 一定時間でDOMを更新する
      value: function update() {
        var date = this.getDate();

        this.updateDomElement(date, 'day');
        this.updateDomElement(date, 'hour');
        this.updateDomElement(date, 'minute');
        this.updateDomElement(date, 'second');
      }
    }, {
      key: 'updateDomElement',


      // DOM要素を更新する
      value: function updateDomElement(date, str) {
        for (var i = 0; i < date[str].length; i++) {
          this[str + '_' + i].className = 'countdown-sprite num-' + date[str].charAt(i);
        }
      }
    }]);

    return CountDown;
  }();

  window.addEventListener('DOMContentLoaded', function () {
    var countdown = new CountDown();
    countdown.start();
  });
})();
