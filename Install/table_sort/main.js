(function() {
  'use strict';

  var data = DATA;
  var timer_id;
  var is_playing = false;
  var order = 1;

  var tbody = document.querySelector('.table tbody');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var sort = document.getElementById('sort');
  
  function init() {
    createTBody(data);
    addEventListeners();
  }

  function addEventListeners() {
    start.addEventListener('click', onStart);
    stop.addEventListener('click', onStop);
    sort.addEventListener('click', onSort);
  }

  function onStart() {
    if (is_playing) return;

    is_playing = true;
    timer_id = setInterval(function() {
      data = shuffle(data);
      createTBody(data);
    }, 1000);
  }

  function onStop() {
    clearInterval(timer_id);
    is_playing = false;
  }

  function onSort() {
    data.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * order;
      if (obj1.price > obj2.price) return 1 * order;
      return 0;
    });
    createTBody(data);
    order *= -1;
  }

  function shuffle(arr) {
    var results = [];

    while (arr.length) {
      results.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }

    return results;
  }

  function createTBody(data) {
    tbody.innerHTML = '';

    data.forEach(function(obj, index) {
      var tr = document.createElement('tr');

      for (var key in obj) {
        var td = document.createElement('td');
        td.textContent = obj[key];
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    });
  }

  window.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();