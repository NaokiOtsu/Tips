(function() {
  'use strict';

  var FPS = 60;

  var timer_id;
  var start_time = 0;
  var elapsed_time = 0;

  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop  = document.getElementById('stop');
  var reset = document.getElementById('reset');

  function initialize() {
    timer.textContent = '0.00';
    addEventListeners();
    btnStatusChange(true, false, false);
  }

  function addEventListeners() {
    start.addEventListener('click', onStart);
    stop.addEventListener('click', onStop);
    reset.addEventListener('click', onReset);
  }

  function onStart() {
    start_time = Date.now();
    updateTimerText();
    btnStatusChange(false, true, true);
  }

  function onStop() {
    elapsed_time += Date.now() - start_time;
    clearTimeout(timer_id);
    btnStatusChange(true, false, true);
  }

  function onReset() {
    clearTimeout(timer_id);
    start_time = 0;
    elapsed_time = 0;
    timer.textContent = '0.00';
    btnStatusChange(true, false, false);
  }

  function getTime() {
    var now_time = Date.now();
    var diff_time = now_time - start_time + elapsed_time;
    var time = (diff_time / 1000).toFixed(2);

    return time;
  }

  function btnStatusChange(is_start, is_stop, is_reset) {
    start.disabled = !is_start;
    stop.disabled  = !is_stop;
    reset.disabled = !is_reset;
  }

  function updateTimerText() {
    timer_id = setTimeout(function() {
      var time = getTime();
      timer.textContent = time;
      updateTimerText();
    }, 1000 / FPS);
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
  
})();