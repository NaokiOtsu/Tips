(function() {
  'use strict';
  
  var INTERVAL = 1 * 1000;
  
  var TABLE_MAP = [
    "name",
    "id",
    "price",
    "img"
  ];
  
  function TableView() {
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');
    this.sort = document.getElementById('sort');
    this.tbody = document.getElementById('table-container').querySelector('tbody');
    
    this.data = DATA.slice();
    this.timer_id;
    this.is_playing = false;
    this.order = 1;
    
    this.bindEvents();
    this.createTable(this.data);
  }
  
  TableView.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this), false);
    this.stop.addEventListener('click', this.onStop.bind(this), false);
    this.sort.addEventListener('click', this.onSort.bind(this), false);
  };
  
  TableView.prototype.createTable = function(data) {
    var _this = this;
    
    var fragment = document.createDocumentFragment();
    
    data.forEach(function(obj) {
      var tr = document.createElement('tr');
      
      // テーブルの順番に合わせてdataを加工して返す
      var table_data = _this.getTableData(obj);
      
      for (var key in table_data) {
        var td = document.createElement('td');
        td.textContent = table_data[key];
        tr.appendChild(td);
      }
      
      fragment.appendChild(tr);
    });
    
    this.tbody.textContent = null;
    this.tbody.appendChild(fragment);
  };
  
  TableView.prototype.getTableData = function(obj) {
    var result = {};
    
    TABLE_MAP.forEach(function(element) {
      for (var key in obj) {
        if (key === element) result[element] = obj[key];
      }
    });
    
    return result;
  };
  
  TableView.prototype.Shuffle = function(array) {
    var n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  };
  
  //
  // Event Handler
  //
  
  TableView.prototype.onStart = function() {
    if (this.is_playing) return;
    this.is_playing = true;
    
    this.timer_id = window.setInterval(this.onUpdate.bind(this), INTERVAL)
  };
  
  TableView.prototype.onUpdate = function() {
    var shuffle_data = this.Shuffle(this.data);
    this.createTable(shuffle_data);
  };
  
  TableView.prototype.onStop = function() {
    window.clearInterval(this.timer_id);
    this.is_playing = false;
  };
  
  TableView.prototype.onSort = function() {
    var _this = this;
    
    this.data = this.data.sort(function(obj1, obj2) {
      if (obj1.price > obj2.price) return -1 * _this.order;
      if (obj1.price < obj2.price) return 1 * _this.order;
      return 0;
    });
    
    this.createTable(this.data);
    this.order *= -1;
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new TableView();
  });
})();