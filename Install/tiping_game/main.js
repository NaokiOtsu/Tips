(function() {
  'use strict';

  var WORDS = [
    'apple',
    'imagine',
    'happy',
    'dog',
    'cat'
  ];
  var currentWord;
  var currentLocation;
  var score;
  var miss;
  var isStarted;
  var timerId;
  var timer;

  var target = document.getElementById('target');
  var scoreLabel = document.getElementById('score');
  var missLabel = document.getElementById('miss');
  var timerLabel = document.getElementById('timer');

  function initialize() {
    currentWord = 'click to start';
    currentLocation = 0;
    score = 0;
    miss = 0;
    isStarted = false;
    timer = 10;

    target.innerHTML = currentWord;
    scoreLabel.innerHTML = score;
    missLabel.innerHTML = miss;
    timerLabel.innerHTML = timer;
  }

  function addEventListeners() {
    window.addEventListener('click', gameStart);
    window.addEventListener('keyup', onKeyUp);
  }

  function onKeyUp() {
    if (!isStarted) return;
    
    if (event.key === currentWord[currentLocation]) {
      strike();
    } else {
      mistake();
    }
  }

  function gameStart() {
    if (isStarted) return;
    
    isStarted = true;
    setTarget();
    updateTimer();
  }

  function strike() {
    currentLocation++;
    var placeholder = '';
    for (var i = 0; i < currentLocation; i++) {
      placeholder += '_';
    }
    target.innerHTML = placeholder + currentWord.substring(currentLocation);
    score++;
    scoreLabel.innerHTML = score;
    if (currentLocation === currentWord.length) {
      setTarget();
    }
  }

  function mistake() {
    miss++;
    missLabel.innerHTML = miss;
  }

  function updateTimer() {
    timerId = setTimeout(function() {
      timer--;
      timerLabel.innerHTML = timer;

      if (timer <= 0) {
        var accuracy = (score + miss) === 0 ? '0.00' : ((score / (score + miss)) * 100).toFixed(2);
        alert(score + ' letters, ' + miss + ' miss! ' + accuracy + ' % accuracy');
        clearTimeout(timerId);
        initialize();
        return;
      }
      updateTimer();
    }, 1000);
  }

  function setTarget() {
    currentWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    target.innerHTML = currentWord;
    currentLocation = 0;
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
    addEventListeners();
  });
})();