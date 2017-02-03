(function() {
  'use strict';
  
  var INTERVAL = 1 * 1000;
  var TABLE_MAP = [
    "id",
    "price",
    "name",
    "img"
  ];
  
  function CreateTable(data) {
    this.timer_id;
    this.data       = data;
    this.is_playing = false;
    this.order      = -1;
    
    this.start = document.getElementById('start');
    this.stop  = document.getElementById('stop');
    this.sort  = document.getElementById('sort');
    this.tbody = document.getElementById('table-container').querySelector('tbody');
    
    this.bindEvents();
    this.createTable(this.data);
  }
  
  CreateTable.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this), false);
    this.stop.addEventListener('click',  this.onStop.bind(this),  false);
    this.sort.addEventListener('click',  this.onSort.bind(this),  false);
  };
  
  CreateTable.prototype.createTable = function(data) {
    var _this = this;
    var fragment = document.createDocumentFragment();
    
    data.forEach(function(obj) {
      var tr = document.createElement('tr');
      var table_map_obj = _this.getTableMapObj(obj);
      
      for (var key in table_map_obj) {
        var td = document.createElement('td');
        td.textContent = table_map_obj[key];
        tr.appendChild(td);
      }
      
      fragment.appendChild(tr);
    });
    
    this.tbody.textContent = null;
    this.tbody.appendChild(fragment);
  };
  
  CreateTable.prototype.getTableMapObj = function(obj) {
    var result = {};
    
    TABLE_MAP.forEach(function(element) {
      for (var key in obj) {
        if (key === element) result[key] = obj[key];
      }
    });
    
    return result;
  };
  
  CreateTable.prototype.shuffle = function(array) {
    var length = array.length;
    var temp;
    var num;

    while (length) {
      num = Math.floor(Math.random() * length--);
      temp = array[length];
      array[length] = array[num];
      array[num] = temp;
    }

    return array;
  };
  
  CreateTable.prototype.onStart = function() {
    if (this.is_playing) return;
    this.is_playing = true;
    
    this.timer_id = window.setInterval(this.onUpdateTable.bind(this), INTERVAL);
  };
  
  CreateTable.prototype.onUpdateTable = function() {
    this.shuffle(this.data);
    this.createTable(this.data);
  };
  
  CreateTable.prototype.onStop = function() {
    window.clearInterval(this.timer_id);
    this.is_playing = false;
  };
  
  CreateTable.prototype.onSort = function() {
    var _this = this;
    
    this.data.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * _this.order;
      if (obj1.price > obj2.price) return 1 * _this.order;
      return 0;
    });
    this.createTable(this.data);
    this.order *= -1;
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new CreateTable(DATA);
  });
})();