(function() {
  'use strict';
  
  function SortTable() {
    this.container = document.querySelector('.sort-table-container');
    this.tbody = this.container.querySelector('tbody');
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');
    this.sort = document.getElementById('sort');
    
    this.timer_id;
    this.is_playing = false;
    this.order = 1;
    
    this.createTable(DATA);
    this.bindEvents();
  }
  
  SortTable.prototype.createTable = function(data) {
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
    
    this.tbody.textContent = null;
    this.tbody.appendChild(fragment);
  };
  
  SortTable.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this));
    this.stop.addEventListener('click', this.onStop.bind(this));
    this.sort.addEventListener('click', this.onSort.bind(this));
  };
  
  SortTable.prototype.onStart = function() {
    if (this.is_playing) return;
    
    var self = this;
    this.is_playing = true;
    
    this.timer_id = setInterval(function() {
      self.createTable(self.shuffle(DATA));
    }, 1000);
  };
  
  SortTable.prototype.onStop = function() {
    clearInterval(this.timer_id);
    this.is_playing = false;
  };
  
  SortTable.prototype.onSort = function() {
    var self = this;
    
    var sortData = DATA.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * self.order;
      if (obj1.price > obj2.price) return 1 * self.order;
      return 0;
    });
    this.createTable(sortData);
    
    this.order *= -1;
  };
  
  SortTable.prototype.shuffle = function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    new SortTable();
  });
  
})();