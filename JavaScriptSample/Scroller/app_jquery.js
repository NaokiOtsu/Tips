(function() {
  'use strict';

  function Scroller(config) {
    var $element  = $('html,body');
    var scrollY  = this.getScrollY(config.scrollTo);
    var duration = 1000;

    this.scrollTo($element, scrollY, duration);
  }

  // Configをセットする
  Scroller.prototype.getScrollY = function(scrollTo) {
    // 数値だったら
    if (! isNaN(scrollTo)) {
      return Number(scrollTo);
    }

    // 存在するHTMLElementだったら
    if ($(scrollTo).length) {
      return $(scrollTo).offset().top;
    }

    return 0; // デフォルト値
  };

  // 対象の位置までスクロールさせる
  Scroller.prototype.scrollTo = function($element, to, duration) {
    console.log(to);
    requestAnimationFrame(function() {
      $element.animate({
        scrollTop: to
      }, duration);
    });
  };

  window.addEventListener('load', function() {
    new Scroller({
      scrollTo: '#goal'
    });
  });
})();