(function() {
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var sort = document.getElementById('sort');
  var sort2 = document.getElementById('sort2');
  var tbody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

  var is_playing = false;
  var timer_id;
  var data = DATA;
  var order = 1;

  // 初期化
  function init() {
    renderTable(data);
    addEventListeners();
  }

  // テーブルを描画
  function renderTable(data) {
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

  // イベントの設定
  function addEventListeners() {
    start.addEventListener('click', onClickStart);
    stop.addEventListener('click', onClickStop);
    sort.addEventListener('click', onClickSort);
    sort2.addEventListener('click', onClickSort2);
  }

  // startをクリックしたら
  function onClickStart() {
    if (is_playing) return;

    is_playing = true;

    timer_id = window.setInterval(function() {
      data = shuffle(data);
      renderTable(data);
    }, 1000)
  }

  // stopをクリックしたら
  function onClickStop() {
    clearInterval(timer_id);
    is_playing = false;
  }

  // sortをクリックしたら
  function onClickSort() {
    sortTable(data);
  }

  // sort2をクリックしたら
  function onClickSort2() {
    var data = getData();
    sortTable(data);
  }

  // priceでソートして描画する
  function sortTable(data) {
    data.sort(function(obj1, obj2) {
      if (obj1.price < obj2.price) return -1 * order;
      if (obj1.price > obj2.price) return 1 * order;
      return 0;
    });
    renderTable(data);
    order *= -1;
  }

  // tbodyからdataを作って返す
  function getData() {
    var data = [];
    var trs = Array.prototype.slice.call(tbody.children);

    trs.forEach(function(tr, index) {
      data[index] = {};
      
      var tds = tr.getElementsByTagName('td');
      data[index].id = Number(tds[0].textContent);
      data[index].name = tds[1].textContent;
      data[index].path = tds[2].textContent;
      data[index].price = Number(tds[3].textContent);
    });

    return data;
  }

  // 配列のシャッフル
  function shuffle(array) {
    var n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  }

  window.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();