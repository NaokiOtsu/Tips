var TableSort = require('../app');

describe('テーブルを作成してDOMを構築する', function() {
  beforeEach(function() {
    new TableSort();
  });
  // afterEach(function() {});
  it('テーブル内に10個のデータが表示される', function() {
    document.body.innerHTML = __html__['test/table_sort.html'];
    var tbody = document.querySelector('.table-wrapper tbody');
    assert(tbody.children.length === 0);

    
  });
});
