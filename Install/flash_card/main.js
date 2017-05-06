(function() {
  'use strict';

  var WORDS = [
    { 'en': 'read', 'ja': '読む' },
    { 'en': 'write', 'ja': '書く' },
    { 'en': 'eat', 'ja': '食べる' },
    { 'en': 'run', 'ja': '走る' },
    { 'en': 'walk', 'ja': '歩く' }
  ];

  var card       = document.getElementById('card');
  var card_front = document.getElementById('card-front');
  var card_back  = document.getElementById('card-back');
  var btn        = document.getElementById('btn');

  function initialize() {
    next();
    addEventListeners();
  }

  function addEventListeners() {
    card.addEventListener('click', flip);
    btn.addEventListener('click', next);
    window.addEventListener('keyup', keyup);
  }

  function flip() {
    card.className = card.className === '' ? 'open' : '';
  }

  function next() {
    if (card.className === 'open') {
      card.addEventListener('transitionend', setCard);
      flip();
    } else {
      setCard();
    }
  }

  function keyup() {
    if (event.keyCode === 70) {
      flip();
    } else if (event.keyCode === 78) {
      next();
    }
  }

  function setCard() {
    var num = Math.floor(Math.random() * WORDS.length);
    card_front.innerHTML = WORDS[num]['en'];
    card_back.innerHTML = WORDS[num]['ja'];
    card.removeEventListener('transitionend', setCard);
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();