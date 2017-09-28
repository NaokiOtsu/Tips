(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var sortOrder = 1; // 1: 昇順, 2: 降順

  function rebuildTbody(rows) {
    var tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    for (var i = 0; i < rows.length; i++) {
      tbody.appendChild(rows[i]);
    }
  }

  function updateClassName(th) {
    for (var i = 0; i < ths.length; i++) {
      ths[i].className = '';
    }
    th.className = sortOrder === 1 ? 'asc' : 'desc';
  }

  function compare(a, b, col, type) {
    var _a = a.children[col].textContent;
    var _b = b.children[col].textContent;
    if (type === 'number') {
      _a = _a * 1;
      _b = _b * 1;
    } else if (type === 'string') {
      _a = _a.toLowerCase();
      _b = _b.toLowerCase();
    }
    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  }

  function sortRows(th) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));
    var col = th.cellIndex;
    var type = th.dataset.type;
    rows.sort(function(a, b) {
      return compare(a, b, col, type) * sortOrder;
    });
    return rows;
  }

  function setup() {
    for (var i = 0; i < ths.length; i++) {
      ths[i].addEventListener('click', function() {
        var rows = sortRows(this);
        rebuildTbody(rows);
        updateClassName(this);
        sortOrder *= -1;
      });
    }
  }

  setup();
})();