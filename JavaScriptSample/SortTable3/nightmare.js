var Nightmare = require('nightmare');
var vo = require('vo');

vo(function* () {
  var nightmare = Nightmare({ show: true });
  var link = yield nightmare
    .goto('http://qiita.com/')
    .click('.item-box')
    
    
})(function (err, result) {
  if (err) return console.log(err);
  console.log(result);
});