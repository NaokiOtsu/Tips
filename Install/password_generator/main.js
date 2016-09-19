(function(){
  'use strict';
  
  var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  var NUMBER = '12345678910';
  var SYMBOL = '();:_!?^<>';

  var text = document.getElementById('text');
  var range = document.getElementById('range');
  var range_num = document.getElementById('range_num');
  var numbers_check = document.getElementById('numbers_check');
  var symbols_check = document.getElementById('symbols_check');

  function initialize() {
    range_num.textContent = range.value;
    addEventListeners();
  }

  function addEventListeners() {
    btn.addEventListener('click', onClick);
    range.addEventListener('change', onChange);
  }

  function onClick() {
    var alphabet = ALPHABET;
    alphabet += alphabet.toLocaleUpperCase();
    var number = NUMBER;
    var symbol = SYMBOL;
    var result_text = '';
    var length = range.value;

    if (numbers_check.checked) alphabet += number;
    if (symbols_check.checked) alphabet += symbol;
    
    for (var i = 0; i < length; i++) {
      result_text += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    text.value = result_text;
  }

  function onChange() {
    range_num.textContent = this.value;
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();