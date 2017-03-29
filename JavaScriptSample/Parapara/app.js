(function() {
  'use strict';

  var timerId;
  var array = [1,2,3,4,5,6,7,8,9,10];
  var length = array.length;
  var current = 0;
  var target = document.getElementById('target');
  var isPlaying = false;

  function init() {
    if (isPlaying) return;

    isPlaying = true;
    timerId = window.setInterval(function() {
      target.textContent = array[current];
      current++;
      if (current >= length) current = 0;
    }, 50);

    document.getElementById('stop').addEventListener('click', onStop);
  }

  function onStop() {
    window.clearInterval(timerId);
  }

  window.addEventListener('DOMContentLoaded', init);
})();