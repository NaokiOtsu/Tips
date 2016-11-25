(function() {
  'use strict';

  // ループするカルーセル
  // 中心の数値を取得
  // 中心にアイテムが来るように設定
  // ulも最初に表示するアイテムが来るように設定
  // クリックしたら、ulの位置を変更すると共にアニメーションするように設定
  // アニメーション終了したらアイテムのセット「をセットし直す

  var list = document.querySelector('.item-list');
  var items = Array.prototype.slice.call(document.querySelectorAll('.item'));
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');

  var length = items.length;
  var center = Math.floor(length / 2);

  function Carousel() { 
    this.setInitItems();
    this.buildItemList();
    this.setItemList();
    this.addEventListeners();
    console.log(items);
    console.log(center);
    
  }

  // イベント設定
  Carousel.prototype.addEventListeners = function() {
    prev.addEventListener('click', this.prev.bind(this));
  };

  // prevのクリック
  Carousel.prototype.prev = function() {
    console.log(list.clientWidth);
    list.style.webkitTransition = 'all 166ms ease-out';
    this.setPrevItems();
    this.buildItemList();
    console.log(items);
  };

  // item-listのセッティング
  Carousel.prototype.setItemList = function() {
    var x = center * this.getItemWidth()
    list.style.webkitTransform = 'translate(-'+ x +'px, 0)';
    console.log(x);
  };

  // 配列itemsをセッティング(配列の中心に表示したいitemがくるように)
  Carousel.prototype.setInitItems = function() {
    for(var i = 0; i < center; i++) {
      items.splice(0, 0, items[length - 1]); // 配列の最後の要素を先頭に持ってくる
      items.pop(); // 最後の要素は削除
    }
  };

  // prevを押した時の配列構築
  Carousel.prototype.setPrevItems = function() {
    items.splice(0, 0, items[length - 1]); // 配列の最後の要素を先頭に持ってくる
    items.pop(); // 最後の要素は削除
  };

  // item-listのDOM構築
  Carousel.prototype.buildItemList = function() {
    var fragment = document.createDocumentFragment();

    list.innerHTML = '';
    for(var i = 0; i < length; i++) {
      fragment.appendChild(items[i]);
    }
    list.appendChild(fragment);
  };

  // itemの横幅を返す
  Carousel.prototype.getItemWidth = function() {
    return list.clientWidth;
  };

  window.addEventListener('DOMContentLoaded', function() {
    new Carousel();
  });
})();