(function(window) {
  'use strict';
  
  var INTERVAL = 1 * 1000;
  
  var TABLE_MAP = [
    "name",
    "id",
    "price",
    "img"
  ];
  
  function Table(data) {
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');
    this.sort = document.getElementById('sort');
    this.table = document.getElementById('table-container');
    this.tbody = this.table.getElementsByTagName('tbody')[0];
    
    this.timer_id;
    this.is_playing = false;
    this.data = data.slice();
    this.order = -1;
    
    this.bindEvents();
    this.createTable(this.data);
  }
  
  Table.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this), false);
    this.stop.addEventListener('click', this.onStop.bind(this), false);
    this.sort.addEventListener('click', this.onSort.bind(this), false);
  };
  
  Table.prototype.createTable = function(data) {
    var _this = this;
    
    var fragment = document.createDocumentFragment();
    
    data.forEach(function(obj, index) {
      var tr = document.createElement('tr');
      
      var table_map_obj = _this.getTableMapObject(obj);
      
      for (var key in table_map_obj) {
        var td = document.createElement('td');
        td.textContent = obj[key];
        tr.appendChild(td);
      }
      
      fragment.appendChild(tr);
    });
    
    this.tbody.textContent = null;
    this.tbody.appendChild(fragment);
  };
  
  // オブジェクトを指定したテーブルの順番に加工して返す
  Table.prototype.getTableMapObject = function(obj) {
    var data = {};
    
    TABLE_MAP.forEach(function(element) {
      for (var key in obj) {
        if (key === element) data[element] = obj[key];
      }
    });
    
    return data;
  };
  
  Table.prototype.onStart = function() {
    var _this = this;
    window.hoge = '111';
    
    if (_this.is_playing) return;
    _this.is_playing = true;
    
    _this.timer_id = setInterval(function() {
      var data = _this.shuffle(_this.data);
      _this.createTable(data);
    }, INTERVAL);
  };
  
  Table.prototype.onStop = function() {
    clearInterval(this.timer_id);
    this.is_playing = false;
  };
  
  Table.prototype.onSort = function() {
    var _this = this;
    
    var data = this.data.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * _this.order;
      if (obj1.price > obj2.price) return 1 * _this.order;
      return 0;
    });
    
    _this.createTable(data);
    _this.order *= -1;
  };
  
  Table.prototype.shuffle = function(array) {
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
    new Table(DATA);
  });
  
  window.Table = Table;
})(window);