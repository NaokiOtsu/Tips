(function() {
  'use strict';

  // ループするカルーセル
  function Carousel() { 
    this.list = document.querySelector('.item-list');
    this.prev = document.querySelector('.prev');
    this.next = document.querySelector('.next');

    this.itemLength       = this.list.children.length;
    this.centerNum        = Math.ceil(this.itemLength / 2);
    this.translateX       = (this.centerNum - 1) * this.list.clientWidth;
    this.transitionConfig = 'transform 200ms ease-out';

    this.prevTransitionEnd = this.prevTransitionEnd.bind(this);
    this.nextTransitionEnd = this.nextTransitionEnd.bind(this);

    this.initList();
    this.resetTranslateX();
    this.addEventListeners();
  }

  // listの中心に初期表示したいアイテムをセットする
  Carousel.prototype.initList = function() {
    for(var i = 0; i < this.itemLength - this.centerNum; i++) {
      this.list.insertBefore(this.list.lastElementChild, this.list.firstElementChild);
    }
  };

  // イベント設定
  Carousel.prototype.addEventListeners = function() {
    this.prev.addEventListener('click', this.onPrev.bind(this));
    this.next.addEventListener('click', this.onNext.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  };

  // prevのクリック
  Carousel.prototype.onPrev = function() {
    this.transitionOn();
    this.list.style.transform = 'translateX(-'+ (this.translateX - this.list.clientWidth) +'px)';
    this.list.addEventListener('webkitTransitionEnd', this.prevTransitionEnd);
  };

  // nextのクリック
  Carousel.prototype.onNext = function() {
    this.transitionOn();
    this.list.style.transform = 'translateX(-'+ (this.translateX + this.list.clientWidth) +'px)';
    this.list.addEventListener('webkitTransitionEnd', this.nextTransitionEnd);
  };

  // prevのtransitionが終わったら
  Carousel.prototype.prevTransitionEnd = function() {
    this.resetListStyle();
    this.list.insertBefore(this.list.lastElementChild, this.list.firstElementChild);
    this.list.removeEventListener('webkitTransitionEnd', this.prevTransitionEnd);
  };

  // nextのtransitionが終わったら
  Carousel.prototype.nextTransitionEnd = function() {
    this.resetListStyle();
    this.list.appendChild(this.list.firstElementChild);
    this.list.removeEventListener('webkitTransitionEnd', this.nextTransitionEnd);
  };

  // listのtransitionとtranslateXをリセットする
  Carousel.prototype.resetListStyle = function() {
    this.transitionOff();
    this.resetTranslateX();
  };

  Carousel.prototype.resetTranslateX = function() {
    this.list.style.transform = 'translateX(-'+ this.translateX +'px)';
  };

  // transitionをONにする
  Carousel.prototype.transitionOn = function() {
    this.list.style.transition = this.transitionConfig;
  };

  // transitionをOFFにする
  Carousel.prototype.transitionOff = function() {
    this.list.style.transition = '';
  };

  // resizeされたらtranslateXをセットしなおす
  Carousel.prototype.resize = function() {
    this.translateX = (this.centerNum - 1) * this.list.clientWidth;
    this.resetTranslateX();
  };

  window.addEventListener('DOMContentLoaded', function() {
    new Carousel();
  });
})();