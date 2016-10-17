var hoge = 'hoge';
var _ = require('underscore');

console.log(_);

_.times(5, function() {
  console.log(333);
});

function Fuga() {
  this.fuga = 'fuga';
}

Fuga.prototype.init = function() {

};

new Fuga();