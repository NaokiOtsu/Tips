'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBark = exports.MAKE_BARK = undefined;

var _reduxActions = require('redux-actions');

var MAKE_BARK = exports.MAKE_BARK = 'MAKE_BARK';
var makeBark = exports.makeBark = (0, _reduxActions.createAction)(MAKE_BARK, function () {
  return true;
});