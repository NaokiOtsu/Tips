(function() {
  'use strict';

  function TableSort() {
    this.start = document.getElementById('start');
    this.stop  = document.getElementById('stop');
    this.sort  = document.getElementById('sort');
    this.table = document.querySelector('.table');

    this.timer_id;
    this.interval = 1000;
    this.is_start = false;
    this.order = 1;

    this.buildTable(DATA);
    this.bindEvents();
  }

  TableSort.prototype.buildTable = function(data) {
    var fragment = document.createDocumentFragment();

    data.forEach(function(obj) {
      var tr = document.createElement('tr');
      for (var key in obj) {
        var td = document.createElement('td');
        td.textContent = obj[key];
        tr.appendChild(td);
      }
      fragment.appendChild(tr);
    });

    this.table.innerHTML = '';
    this.table.appendChild(fragment);
  };

  TableSort.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this));
    this.stop.addEventListener('click', this.onStop.bind(this));
    this.sort.addEventListener('click', this.onSort.bind(this));
  };

  TableSort.prototype.onStart = function() {
    if (this.is_start) return;
    this.is_start = true;
    var _this = this;

    this.timer_id = setInterval(function() {
      var data = _this.shuffle(DATA);
      _this.buildTable(data);
    }, _this.interval);
  };

  TableSort.prototype.shuffle = function(data) {
    var n = data.length, t, i;

    while(n) {
      i = Math.floor(Math.random() * n--);
      t = data[n];
      data[n] = data[i];
      data[i] = t;
    }

    return data;
  };

  TableSort.prototype.onStop = function() {
    clearInterval(this.timer_id);
    this.is_start = false;
  };

  TableSort.prototype.onSort = function() {
    var _this = this;

    var data = DATA.sort(function(obj1, obj2) {
      if (obj1.price > obj2.price) return -1 * _this.order;
      if (obj1.price < obj2.price) return 1 * _this.order;
      return 0;
    });

    _this.buildTable(data);
    _this.order *= -1;
  };

  window.addEventListener('DOMContentLoaded', function() {
    new TableSort();
  });
})();