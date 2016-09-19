(function() {
  'use strict';

  var TIME = 1;
  var THRESHOLD = 0.5;

  var start_time;
  var result_time;
  var is_running = false;

  var result = document.getElementById('result');
  var btn = document.getElementById('btn');

  function initialize() {
    result.textContent = 'Startボタンを押してね'
    addEventListeners();
  }

  function addEventListeners() {
    btn.addEventListener('click', onClick);
  }

  function onClick() {
    if (is_running) {
      // 結果表示
      is_running = false;
      btn.textContent = 'Start!';
      var diff_time = Date.now() - start_time;
      result_time = (diff_time / 1000).toFixed(2);
      renderResult(result_time);
    } else {
      // 計測前
      is_running = true;
      btn.textContent = 'Stop!';
      start_time = Date.now();
      result.textContent = '計測中...';
    }
  }

  function renderResult(result_time) {
    var diff = (TIME - result_time).toFixed(2);
    if (diff >= -THRESHOLD && diff <= THRESHOLD) {
      result.innerHTML = '君のタイムは'+ result_time +'秒<br>おめでとう!!';
    } else if (diff > 0) {
      result.innerHTML = '君のタイムは'+ result_time +'秒<br>'+ diff + '秒、早かった!';
    } else if (diff < 0) {
      result.innerHTML = '君のタイムは'+ result_time +'秒<br>'+ Math.abs(diff) + '秒、遅かった!';
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();