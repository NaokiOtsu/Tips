(function() {
  'use strict';
  
  var TABLE_MAP = [
    'price',
    'img',
    'name',
    'id'
  ];
  var INTERVAL = 1 * 1000;
  
  function TableSort() {
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');
    this.sort = document.getElementById('sort');
    this.tbody = document.getElementById('table-container').querySelector('tbody');
    
    this.data = DATA;
    this.timer_id;
    this.is_playing = false;
    this.order = 1;
    
    this.createTable(this.data);
    this.bindEvent();
  }
  
  TableSort.prototype.createTable = function(data) {
    var fragment = document.createDocumentFragment();
    
    data.forEach(function(dataObj) {
      var tr = document.createElement('tr');
      
      TABLE_MAP.forEach(function(str) {
        var td = document.createElement('td');
        
        for (var key in dataObj) {
          if (str === key) td.textContent = dataObj[key];
        }
        
        tr.appendChild(td);
      });
      
      fragment.appendChild(tr);
    });
    
    this.tbody.textContent = null;
    this.tbody.appendChild(fragment);
  };
  
  TableSort.prototype.bindEvent = function() {
    this.start.addEventListener('click', this.onStart.bind(this), false);
    this.stop.addEventListener('click', this.onStop.bind(this), false);
    this.sort.addEventListener('click', this.onSort.bind(this), false);
  };
  
  TableSort.prototype.onStart = function() {
    if (this.is_playing) return;
    
    var _this = this;
    this.is_playing = true;
    
    this.timer_id = window.setInterval(function() {
      _this.shuffle(_this.data);
      _this.createTable(_this.data);
    }, INTERVAL)
  };
  
  TableSort.prototype.onStop = function() {
    window.clearInterval(this.timer_id);
    this.is_playing = false;
  };
  
  TableSort.prototype.onSort = function() {
    var _this = this;
    
    this.data = this.data.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * _this.order;
      if (obj1.price > obj2.price) return 1 * _this.order;
      return 0;
    });
    
    this.order *= -1;
    
    this.createTable(this.data);
  };
  
  TableSort.prototype.shuffle = function(array) {
    var n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new TableSort();
  });
  
})();