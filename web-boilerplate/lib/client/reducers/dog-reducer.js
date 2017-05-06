'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _dogActions = require('../actions/dog-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _immutable2.default.Map({
  hasBarked: false
});

var dogReducer = function dogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dogActions.MAKE_BARK:
      return state.set('hasBarked', action.payload);
    default:
      return state;
  }
};

exports.default = dogReducer;