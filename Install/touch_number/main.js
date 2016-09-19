(function() {
  'use strict';

  var PANEL_NUM = 9;
  var FPS = 60;

  var counter;
  var start_time;
  var timer_id;

  var timerLabel = document.getElementById('time');
  var panel      = document.querySelector('.panel');
  var panels;

  function initialize() {
    counter = 1;

    createPanel();
    addEventListeners();
  }

  function addEventListeners() {
    panels = document.querySelectorAll('.panel li');
    start.addEventListener('click', onStart);
    panels.forEach(function(element, index) {
      element.addEventListener('click', onPanelClick);
    });
  }

  function onStart() {
    this.disabled = true;
    panels.forEach(function(element, index) {
      element.className = '';
    });
    start_time = Date.now();
    updateTimer();
  }

  function onPanelClick() {
    var panel_num = Number(this.innerHTML);
    if (panel_num === counter) {
      counter++;
      this.className = 'disabled';
      
      if (counter - 1 === PANEL_NUM) {
        clearTimeout(timer_id);
        alert('Clear! Your Score: ' + timerLabel.innerHTML);
        start.disabled = false;
        initialize();
      }
    }
  }

  function updateTimer() {
    timer_id = setTimeout(function() {
      timerLabel.innerHTML = ((Date.now() - start_time) / 1000).toFixed(2);
      updateTimer();
    }, 1000 / FPS);
  }

  function createPanel() {
    var dom = '';
    var array = [];
    
    for (var i = 0; i < PANEL_NUM; i++) {
      array.push('<li class="disabled hidden">'+ (i+1) +'</li>');
    }
    
    // シャッフル
    while (array.length) {
      dom += array.splice(Math.floor(Math.random() * array.length), 1);
    }
    
    panel.innerHTML = dom;
  }

  function shuffle(array) {
    var n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();