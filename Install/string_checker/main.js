(function() {
  'use strict';

  var REMAIN_NUM = 20;
  var THRESHOLD = 10;

  var textarea = document.getElementById('textarea');
  var remain   = document.getElementById('remain');

  function initialize() {
    addEventListeners();
  }

  function addEventListeners() {
    textarea.addEventListener('keydown', onChange);
  }

  function onChange() {
    var now_num    = textarea.value.length;
    var remain_num = REMAIN_NUM - now_num;
    
    remain.className = (remain_num <= THRESHOLD) ? 'warning' : ''; 
    remain.textContent = remain_num;
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });

})();

