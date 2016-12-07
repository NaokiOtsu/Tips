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
    this.startY = document.body.scrollTop;
    this.scrollY; // スクロール量
    this.startTime = Date.now();
    this.duration = 1000;
    this.easing = 'easeInOutQuint';

    this.settingConfig(config);
    this.move();
  }

  // Configをセットする
  Scroller.prototype.settingConfig = function(config) {
    this.scrollY = 0; // デフォルト値
    
    // 数値だったら
    if (! isNaN(config.scrollTo)) {
      this.scrollY = Number(config.scrollTo);
      return;
    }

    // 存在するHTMLElementだったら
    if (document.querySelector(config.scrollTo) !== null) {
      this.scrollY = document.querySelector(config.scrollTo).offsetTop;
    }
  };

  // スクロールさせる
  Scroller.prototype.move = function() {
    requestAnimationFrame(function() {
      // this.scrollTo(document.body, 1000, 600);
      this.scrollTo();

      // document.documentElement.scrollTop = document.body.scrollTop = this.scrollY;
      // $('html, body').animate({ scrollTop: this.scrollY}, 400);
    }.bind(this));
  };

  // 対象の位置までスクロールさせる
  Scroller.prototype.scrollTo = function(element, to, duration) {
    // if (duration <= 0) return;
    // var difference = to - element.scrollTop;
    // console.log(to);
    // var perTick = difference / duration * 10;

    // requestAnimationFrame(function() {
    //   element.scrollTop = element.scrollTop + perTick;
    //   if (element.scrollTop === to) return;
    //   this.scrollTo(element, to, duration - 10);
    // }.bind(this));
    
    
    var now = Date.now();
    var time = Math.min(1, ((now - this.startTime) / this.duration));
    var timeFunction = EASINGS[this.easing](time);
    document.body.scrollTop = (timeFunction * (this.scrollY - this.startY)) + this.startY;

    if (document.body.scrollTop === this.scrollY) {
      return;
    }
    requestAnimationFrame(function() {
      this.scrollTo();
    }.bind(this));
  };

  window.addEventListener('load', function() {
    new Scroller({
      scrollTo: '#goal'
    });
  });
})();