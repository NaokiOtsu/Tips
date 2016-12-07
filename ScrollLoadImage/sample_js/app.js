(function() {
  'use strict';

  function ScrollBottomLoading() {
    this.addEventListeners();
  }

  ScrollBottomLoading.prototype.addEventListeners = function() {
    window.addEventListener('scroll', this.scroll.bind(this));
  };

  ScrollBottomLoading.prototype.scroll = function() {
    var scrollTop = this.getScrollTop();
    var windowHeight = this.getWindowHeight();
    var documentHeight = this.getDocumentHeight();

    console.log(scrollTop + windowHeight, documentHeight);

    if (scrollTop + windowHeight === documentHeight) {
      this.createElement(); // 下までスクロールされたらコンテンツを増やす
    }
  };

  // コンテンツを増やす
  ScrollBottomLoading.prototype.createElement = function() {
    var element = document.querySelector('.box').cloneNode(true);
    document.body.appendChild(element);
  };

  ScrollBottomLoading.prototype.getScrollTop = function() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  };

  ScrollBottomLoading.prototype.getWindowHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };

  ScrollBottomLoading.prototype.getDocumentHeight = function() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  };

  window.addEventListener('DOMContentLoaded', function() {
    new ScrollBottomLoading();
  });
})();