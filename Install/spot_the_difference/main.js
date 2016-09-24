$(function() {
  'use strict';

  var TEXTS = [
    ['間', 'あ'],
    ['太', 'ふ'],
    ['か', 'ん']
  ];

  var size = 4;
  var level = 0;
  var timer_id;
  var current_time;
  var is_playing = false;

  var $start = $('#start');
  var $stage = $('#stage');
  var $time = $('#time');

  $start.on('click', onStartClick);
  $stage.on('click', 'span', onTextClick);

  function onStartClick() {
    if (is_playing) return;
    
    is_playing = true;
    createStage();
    timerStart();
    $time.html();
  }

  // ステージの作成
  function createStage() {
    var html = '';
    size += level;
    var random_num = Math.floor(Math.random() * size * size) + 1;

    for (var i = 1; i <= size * size; i++) {
      if (i === random_num) {
        html += '<span>'+ TEXTS[level][1] +'</span>'
      } else {
        html += '<span>'+ TEXTS[level][0] +'</span>'
      }

      if (i % size === 0) html += '<br>';
    }

    $stage.html(html)
  }

  // テキストをクリックしたら
  function onTextClick() {
    if (this.textContent === TEXTS[level][1]) {
      if (level === 2) {
        clearTimeout(timer_id);
        $time.html('Your score is ' + current_time);
        level = 0;
        size = 4;
        is_playing = false;
        return;
      }

      level++;
      createStage();
    }
  }

  // 経過時間の計測
  function timerStart() {
    var start_time = Date.now();
    
    var updateTime = function () {
      timer_id = setTimeout(function() {
        var diff_time = Date.now() - start_time;
        current_time = (diff_time / 1000).toFixed(2);

        updateTime();
      }, 1000/30);
    };

    updateTime();
  }

});