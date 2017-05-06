var assert = require('power-assert');

// var author = 'hoo';
// it ("it power-assert", function() {
//   assert(author === 'hoge');
// });

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      // assert.equal(-1, [1,2,3].indexOf(1));
      // assert.equal(-1, [1,2,3].indexOf(2));
    });
  });
});

// describe('app', function() {
//   describe('#add()', function() {
//     it('hoge', function() {
//       assert.equal(3, add(1, 2));
//     });
//   });
// });