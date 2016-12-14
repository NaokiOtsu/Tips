(function() {
  'use strict';

  function Scroller(config) {
    var element  = document.body;
    var scrollY  = this.getScrollY(config.scrollTo);
    var duration = 200;

    this.scrollTo(element, scrollY, duration);
  }

  // Configをセットする
  Scroller.prototype.getScrollY = function(scrollTo) {
    // 数値だったら
    if (! isNaN(scrollTo)) {
      return Number(scrollTo);
    }

    // 存在するHTMLElementだったら
    if (document.querySelector(scrollTo) !== null) {
      return document.querySelector(scrollTo).offsetTop;
    }

    return 0; // デフォルト値
  };

  // 対象の位置までスクロールさせる
  Scroller.prototype.scrollTo = function(element, to, duration) {
    if (duration <= 0) return;

    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    requestAnimationFrame(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      this.scrollTo(element, to, duration - 10);
    }.bind(this));
  };

  window.addEventListener('load', function() {
    new Scroller({
      scrollTo: '#goal'
    });
  });
})();