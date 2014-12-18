define(function() {

  var name = 'sub2';
  var getName = function() {
    return 'sub2: ' + name;
  }
  var greeting = function() {
    return 'hello ' + name + ' from sub2';
  }

  // require.js用に、オブジェクト形式でモジュールを返却します。
  return {
    getName: getName,
    greeting: greeting
  };
});