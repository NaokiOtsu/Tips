describe('Table', function() {
  
  var table;
  
  beforeEach(function() {
    document.body.innerHTML = __html__['test/fixture/index.html'];
  });
  
  afterEach(function() {
    document.body.textContent = null;
  });
  
  beforeEach(function() {
    table = new window.Table(window.DATA);
  });
  
  // createTable()を実行したらテーブルが生成される
  it('createTable', function() {
    expect(table.tbody.children.length).to.equal(window.DATA.length);
  });
  
  // shuffle()すると配列がシャッフルする
  it('array shuffle', function() {
    table.shuffle(table.data); // データをシャッフル
    var flag = table.data.some(function(element, index) {
      return element !== window.DATA[index]; // 一つでも条件がtrueならtrueを返す
    });
    expect(flag).to.equal(true); // 値が変わっていればシャッフルしたとみなす
  });
  
  // スタートボタンをクリックしたら1秒後にはデータが変わっている
  it('start button click', function() {
    var clock = sinon.useFakeTimers();
    
    // startボタンをdispatch
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('click');
    table.start.dispatchEvent(event);
    
    var before_text = table.tbody.querySelectorAll('td')[1].textContent;
    clock.tick(1000); // 1秒進める
    var after_text = table.tbody.querySelectorAll('td')[1].textContent;
    
    expect(before_text).to.not.equal(after_text);
    clock.restore();
  });
  
  // ストップボタンを押したら1秒後でもデータは変わらない
  it('stop button click', function() {
    var clock = sinon.useFakeTimers();
    
    // stopボタンをdispatch
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('click');
    table.stop.dispatchEvent(event);
    
    var before_text = table.tbody.querySelectorAll('td')[1].textContent;
    clock.tick(1000); // 1秒進める
    var after_text = table.tbody.querySelectorAll('td')[1].textContent;
    
    expect(before_text).to.equal(after_text);
    clock.restore();
  });
  
  // ソートボタンを押すと、テーブルの一番上と下のデータがDATAのpriceのMAX、MINにそれぞれ差し代わる
  it('sort button click', function() {
    // sortボタンをdispatch
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('click');
    table.sort.dispatchEvent(event);
    
    var prices = window.DATA.map(function(element) {
      return element.price;
    });
    var max_price = Math.max.apply(null, prices);
    var min_price = Math.min.apply(null, prices);
    
    var max_price_dom = Number(table.tbody.querySelectorAll('td')[2].textContent);
    expect(max_price_dom).to.equal(max_price);
    
    table.sort.dispatchEvent(event);
    
    var max_price_dom_after = Number(table.tbody.querySelectorAll('td')[2].textContent);
    expect(max_price_dom_after).to.equal(min_price);
  });
});