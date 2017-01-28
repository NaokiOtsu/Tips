(function() {
  'use strict';

  var is_touch = 'ontouchstart' in window;

  function CarouselTouch() {
    this.list = document.querySelector('.carousel-list');
    this.item = document.querySelectorAll('.carousel-item');
    this.prev = document.querySelector('.carousel-prev');
    this.next = document.querySelector('.carousel-next');

    this.counter = 0;
    this.length = this.item.length;
    this.is_move = false;
    this.position_start_x = 0;
    this.position_move_x = 0;
    
    var width = this.getDeviceWidth();
    this.list.style.webkitTransform = 'translateX(-'+ width * 1 +'px)';
    this.list.style.webkitTransform = this.list.style.webkitTransform + 'translateX(100px)'
    console.log(111);

    this.bindEvents();
  }

  CarouselTouch.prototype.bindEvents = function() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.prev.addEventListener('click', this.onPrev.bind(this));
    this.next.addEventListener('click', this.onNext.bind(this));
    this.list.addEventListener((is_touch) ? 'touchstart' : 'mousedown', this.onTouchStart.bind(this));
    this.list.addEventListener((is_touch) ? 'touchmove' : 'mousemove', this.onTouchMove.bind(this));
  };

  // リサイズ時
  CarouselTouch.prototype.onResize = function() {
    this.setListTranslateX();
  };

  // Prevボタンクリック時
  CarouselTouch.prototype.onPrev = function() {
    this.counter--;
    if (this.counter < 0) this.counter = this.length - 1;
    
    this.setListTranslateX();
  };

  // Nextボタンクリック時
  CarouselTouch.prototype.onNext = function() {
    this.counter++;
    if (this.counter >= this.length) this.counter = 0;
    
    this.setListTranslateX();
  };

  // タッチスタート時
  CarouselTouch.prototype.onTouchStart = function() {
    this.is_move = true;
    var x = (is_touch) ? event.changedTouches[0].clientX : event.clientX;
    this.position_start_x = x;
  };

  // タッチムーブ時
  CarouselTouch.prototype.onTouchMove = function() {
    if (!this.is_move) return;

    var x = (is_touch) ? event.changedTouches[0].clientX : event.clientX;
    this.position_move_x = x;
    var diff_x = this.position_move_x - this.position_start_x;

    
    this.list.style.webkitTransform -= 'translateX(-'+ (width * this.counter) + diff_x +'px)';
  };

  // リストにtranslateXをセットする
  CarouselTouch.prototype.setListTranslateX = function() {
    var width = this.getDeviceWidth();
    this.list.style.webkitTransform = 'translateX(-'+ width * this.counter +'px)';
  };

  // デバイスの横幅を取得する
  CarouselTouch.prototype.getDeviceWidth = function() {
    var width = Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
    return width;
  };

  window.addEventListener('DOMContentLoaded', function() {
    new CarouselTouch();
  });
})();