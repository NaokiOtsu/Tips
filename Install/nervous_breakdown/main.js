(function() {
  'use strict';

  var counter = 2; // カードのペアの数
  var flip_count; // ひっくり返したカードの数
  var first_card; // 最初にflipしたカードのDOM
  var correct_num; // 正解した数
  var is_animating; // アニメーション中か
  
  var container = document.getElementById('card-container');
  var next = document.getElementById('next');

  // 初期化処理
  function initialize() {
    correct_num  = 0;
    flip_count = 0;
    is_animating = false;

    nextButtonHidden();
    createCard();
  }

  // イベント設定
  function addEventListeners() {
    next.addEventListener('click', onNextStage);
  }

  // カードの作成
  function createCard() {
    var html = '';
    var array = [];
    var card;

    // cardのDOM文字列を配列にpush
    for (var i = 1; i <= counter; i++) {
      array[array.length] = '<li><span class="card-front">?</span><span class="card-back">'+ i+'</span></li>';
      array[array.length] = '<li><span class="card-front">?</span><span class="card-back">'+ i+'</span></li>';
    }

    // 配列をシャッフルして文字列に連結
    while (array.length) {
      html += array.splice(Math.floor(Math.random() * array.length), 1)[0];
    }

    // DOMに描画
    container.innerHTML = html;

    // cardのクリックイベント
    card = document.querySelectorAll('#card-container li');
    card.forEach(function(element) {
      element.addEventListener('click', onCardClick);
    });
  }

  // カードのクリック
  function onCardClick() {
    if (is_animating) return; // アニメーション中はreturn

    flip_count++;
    this.className = 'flip';

    if (flip_count % 2 === 1) {
      // 1回目のflip
      firstFlip(this);
    } else {
      // 2回目のflip
      secondFlip(this);
    }
  }

  // 1回目のflip処理
  function firstFlip(element) {
    first_card = element;
  }

  // 2回目のflip処理
  function secondFlip(element) {
    if (isCorrect(element)) {
      // 正解
      console.log('正解');
      correct_num++;
      
      if (isClear()) {
        nextButtonShow(); // 次のステージボタンの表示
      }
    } else {
      // 不正解ならパネルを戻す
      console.log('不正解');
      is_animating = true;
      element.addEventListener('transitionend', transitionEnd);
    }
  }

  // パネルを戻す
  function transitionEnd() {
    this.removeEventListener('transitionend', transitionEnd);
    setTimeout(function() {
      first_card.className = '';
      this.className = '';
      is_animating = false;
    }.bind(this), 200);
  }

  // 1回目のカードと2回目のカードが合っているか
  function isCorrect(element) {
    return element.innerHTML === first_card.innerHTML;
  }

  // クリアしたか
  function isClear() {
    return correct_num === counter;
  }

  // NEXTボタン表示
  function nextButtonShow() {
    next.className = 'active';
  }

  // NEXTボタン非表示
  function nextButtonHidden() {
    next.className = '';
  }

  // NEXTボタンのクリック
  function onNextStage() {
    counter++;
    initialize();
  }

  // DOMロード後
  window.addEventListener('DOMContentLoaded', function() {
    initialize();
    addEventListeners();
  }, false);
  
})();