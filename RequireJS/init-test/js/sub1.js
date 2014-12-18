define(function() {

  var name = 'sub1';
  var getName = function() {
    return 'sub1: ' + name;
  }
  var greeting = function() {
    return 'hello ' + name + ' from sub1';
  }

  // require.js用に、オブジェクト形式でモジュールを返却します。
  return {
    getName: getName,
    greeting: greeting
  };
});