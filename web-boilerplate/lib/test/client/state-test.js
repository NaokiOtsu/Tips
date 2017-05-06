'use strict';

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _chai = require('chai');

var _mocha = require('mocha');

var _dogReducer = require('../../client/reducers/dog-reducer');

var _dogReducer2 = _interopRequireDefault(_dogReducer);

var _dogActions = require('../../client/actions/dog-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

(0, _chai.should)();
var store = void 0;

(0, _mocha.describe)('App State', function () {
  (0, _mocha.describe)('Dog', function () {
    (0, _mocha.beforeEach)(function () {
      store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)({
        dog: _dogReducer2.default
      }));
    });
    (0, _mocha.describe)('makeBark', function () {
      (0, _mocha.it)('should make hasBarked go from false to true', function () {
        store.getState().getIn(['dog', 'hasBarked']).should.be.false;
        store.dispatch((0, _dogActions.makeBark)());
        store.getState().getIn(['dog', 'hasBarked']).should.be.true;
      });
    });
  });
});