'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _message = require('../components/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    message: state.dog.get('hasBarked') ? 'The dog barked' : 'The dog did not bark'
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_message2.default);