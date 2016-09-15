(function() {
  'use strict';

  console.log(TABLE_DATA);

  var tbody = document.querySelector('.table tbody');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var sort = document.getElementById('sort');
  var price = document.getElementById('price');
  
  var timerID;
  var sortOrder = 1;

  // テーブル構築
  function renderTable(data) {
    var html = '';

    for (var i = 0; i < data.length; i++) {
      html += createTableDom(data[i]);
    }

    function createTableDom(obj) {
      var dom = 
        '<tr>' + 
          '<td>'+ obj.id +'</td>' + 
          '<td>'+ obj.name +'</td>' + 
          '<td>'+ obj.img +'</td>' +  
          '<td>'+ obj.price +'</td>' +  
        '</tr>';
      return dom;
    }

    tbody.innerHTML = html;
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

  start.addEventListener('click', function() {
    timerID = setInterval(function() {
      var tableData = shuffle(TABLE_DATA);
      renderTable(tableData);
    }, 1000)
  });

  stop.addEventListener('click', function() {
    clearInterval(timerID);
  });

  sort.addEventListener('click', function() {
    var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'))
    var col = price.cellIndex;
    rows.sort(function(a, b) {
      return compare(a, b, col) * sortOrder;
    });
    var html = '';
    for (var i = 0; i < rows.length; i++) {
      html += '<tr>' + rows[i].innerHTML + '</tr>';
    }
    tbody.innerHTML = html;
    sortOrder *= -1;
  });

  function compare(a, b, col) {
    var _a = Number(a.children[col].textContent);
    var _b = Number(b.children[col].textContent);
    if (_a < _b) {
      return -1;
    } else if (_a > _b) {
      return 1;
    }
    return 0;
  }

  // 読み込み完了したら
  window.addEventListener('DOMContentLoaded', function() {
    renderTable(TABLE_DATA);
  });
})();