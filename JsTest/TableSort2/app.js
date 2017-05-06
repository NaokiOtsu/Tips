(function() {
  'use strict';

  // コンストラクター
  function TableSort() {
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');
    this.sort = document.getElementById('sort');
    this.tbody = document.querySelector('.table-wrapper tbody');

    this.timer_id;
    this.data = DATA;
    this.is_playing = false;
    this.order = -1;

    this.createTable(this.data);
    this.bindEvents();
  }

  // テーブルを作成してDOMを構築する
  TableSort.prototype.createTable = function(data) {
    var fragment = document.createDocumentFragment();

    data.forEach(function(obj) {
      var tr = document.createElement('tr');
      Object.values(obj).forEach(function(value) {
        var td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      fragment.appendChild(tr);
    });
    
    this.tbody.innerHTML = '';
    this.tbody.appendChild(fragment);
  };

  // イベント設定
  TableSort.prototype.bindEvents = function() {
    this.start.addEventListener('click', this.onStart.bind(this));
    this.stop.addEventListener('click', this.onStop.bind(this));
    this.sort.addEventListener('click', this.onSort.bind(this));
  };

  // start クリック時
  TableSort.prototype.onStart = function() {
    var _this = this;
    
    if (_this.is_playing) return;
    _this.is_playing = true;

    _this.timer_id = setInterval(function() {
      _this.shuffle(_this.data);
      _this.createTable(_this.data);
    }, 1000);
  };

  // stop クリック時
  TableSort.prototype.onStop = function() {
    clearInterval(this.timer_id);
    this.is_playing = false;
  };

  // sort クリック時
  TableSort.prototype.onSort = function() {
    var _this = this;

    _this.data = _this.data.sort(function(obj_1, obj_2) {
      if (obj_1.price > obj_2.price) return -1 * _this.order;
      if (obj_1.price < obj_2.price) return 1 * _this.order;
      return 0;
    });

    _this.createTable(_this.data);
    _this.order *= -1;
  };

  // シャッフル
  TableSort.prototype.shuffle = function(arr) {
    var length = arr.length;
    var tmp;
    var num;

    while(length) {
      num = Math.floor(Math.random() * length--);
      tmp = arr[length];
      arr[length] = arr[num];
      arr[num] = tmp;
    }
  };

  // DOM読み込みされたら
  window.addEventListener('DOMContentLoaded', function() {
    new TableSort();
  });
})();