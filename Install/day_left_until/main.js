(function() {
  'use strict';
  
  var targetTime = new Date('2016/11/4 5:00').getTime();
  var timerId;
  
  var time = document.getElementById('time');
  
  function init() {
    update();
  }
  
  function update() {
    timerId = setTimeout(function() {
      var remain;
      var diff_time = targetTime - Date.now();
      
      var day = Math.floor(diff_time / (60 * 60 * 24 * 1000));
      
      remain = diff_time % (60 * 60 * 24 * 1000);
      var hour = Math.floor(remain / (60 * 60 * 1000));
      
      remain = diff_time % (60 * 60 * 1000);
      var minute = Math.floor(remain / (60 * 1000));
      
      remain = diff_time % (60 * 1000);
      var second = Math.floor(remain / 1000);
      
      time.innerHTML = day + '日' + hour + '時間' + minute + '分' + second + '秒';
      
      update();
    }, 100);
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    init();
  });
  
})();