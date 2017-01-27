'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _mocha = require('mocha');

var _dog = require('../../shared/dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should(); /* eslint-disable import/no-extraneous-dependencies, no-console */

_chai2.default.use(_sinonChai2.default);

(0, _mocha.describe)('Shared', function () {
  (0, _mocha.describe)('Dog', function () {
    (0, _mocha.describe)('barkInConsole', function () {
      (0, _mocha.it)('should print a bark string with its name', function () {
        (0, _sinon.stub)(console, 'log');
        new _dog2.default('Test Toby').barkInConsole();
        console.log.should.have.been.calledWith('Wah wah, I am Test Toby');
        console.log.restore();
      });
    });
  });
});