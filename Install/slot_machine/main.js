(function() {
  'use strict';

  var FPS = 30;

  var slots = ['△', '☆', '◯'];
  var timer_ids = [];
  var is_playing = false;
  var counter = 0;
  var results = [];

  var lists = document.querySelectorAll('.slot-list li');
  var btns  = document.querySelectorAll('.slot-btns li button');
  var spin  = document.getElementById('spin');

  function initialize() {
    addEventListeners();
    btns.forEach(function(element, index) {
      element.disabled = true;
    });
  }

  function addEventListeners() {
    btns.forEach(function(element, index) {
      element.addEventListener('click', function() {
        onBtnClick(element, index);
      });
    });
    spin.addEventListener('click', onSpinClick);
  }

  function onBtnClick(element, index) {
    element.disabled = true;
    clearTimeout(timer_ids[index]);
    results[index] = lists[index].innerHTML;

    counter++;
    if (counter === btns.length) {
      spin.disabled = false;
      counter = 0;
      is_playing = false;
      checkResult();
    }
  }

  function onSpinClick() {
    if (is_playing) return;
    is_playing = true;
    this.disabled = true;
    lists.forEach(function(element, index) {
      element.className = '';
      runSlot(element, index);
      btns[index].disabled = false;
    });
  }

  function runSlot(element, index) {
    var num = Math.floor(Math.random() * lists.length);
    element.textContent = slots[num];

    timer_ids[index] = setTimeout(function() {
      runSlot(element, index);
    }, 1000 / FPS);
  }

  function checkResult() {
    results.forEach(function(value, index) {
      results.forEach(function(_value, _index) {
        if (index === _index) return;
        if (value === _value) {
          lists[index].className = 'hit';
        } 
      });
    });
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();