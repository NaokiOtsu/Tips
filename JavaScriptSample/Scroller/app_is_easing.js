(function() {
  'use strict';

  // イージング
  var EASINGS = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  function Scroller(config) {
    this.startY    = document.body.scrollTop; // スタート位置
    this.scrollY   = this.getScrollY(config);
    this.scrollY   += config.offset ? config.offset : 0;
    this.startTime = Date.now();
    this.duration  = 1000;
    this.easing    = 'easeInOutQuint';

    if (config.isAfter) return; // すぐにアニメーションしない場合はreturn

    this.scrollTo();
  }

  // Configをセットする
  Scroller.prototype.getScrollY = function(config) {
    // 数値だったら
    if (! isNaN(config.scrollTo)) {
      return Number(config.scrollTo);
    }

    // 存在するHTMLElementだったら
    if (document.querySelector(config.scrollTo) !== null) {
      return document.querySelector(config.scrollTo).offsetTop;
    }

    return 0;
  };

  // 対象の位置までスクロールさせる
  Scroller.prototype.scrollTo = function() {
    var now          = Date.now();
    var time         = Math.min(1, ((now - this.startTime) / this.duration));
    var timeFunction = EASINGS[this.easing](time);
    
    document.body.scrollTop = ((this.scrollY - this.startY) * timeFunction) + this.startY;

    if (document.body.scrollTop === this.scrollY) return; // ゴールに達したらreturn

    requestAnimationFrame(function() {
      this.scrollTo();
    }.bind(this));
  };

  window.addEventListener('load', function() {
    new Scroller({
      scrollTo: '#goal',
      isAfter: false
    });
  });
})();