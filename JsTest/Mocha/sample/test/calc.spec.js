var assert = require('assert');
var calc = require('../src/calc');

describe('calc', function() {
  it('add', function() {
    assert.equal(4, calc.add(1, 3));
  });
  
  it('multipy', function() {
    assert.equal(6, calc.multipy(2, 3));
  });
  
  it('add fail', function() {
    assert.equal(3, calc.add(1, 1));
  });
});