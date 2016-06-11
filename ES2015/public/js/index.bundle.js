webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Tap = __webpack_require__(8);

	var _Tap2 = _interopRequireDefault(_Tap);

	var _CountDown = __webpack_require__(9);

	var _CountDown2 = _interopRequireDefault(_CountDown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(function () {
		init();
	});

	var init = function init() {
		new _Tap2.default();
		new _CountDown2.default(2017, 1, 1, 0, 0, 0);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DISTANCE_THRESHOLD = 10;

	var Tap = function () {
		function Tap() {
			_classCallCheck(this, Tap);

			this.init();
		}

		_createClass(Tap, [{
			key: 'init',
			value: function init() {
				this.body = document.querySelectorAll('body');

				this.touchstart_position = {};
				this.touchmove_position = {};

				this.bindEvents();
			}
		}, {
			key: 'bindEvents',
			value: function bindEvents() {
				this.body[0].addEventListener('touchstart', this.touchstart.bind(this), true);
				this.body[0].addEventListener('touchmove', this.touchmove.bind(this), true);
				this.body[0].addEventListener('touchend', this.touchend.bind(this), true);
			}
		}, {
			key: 'touchstart',
			value: function touchstart() {
				if (!event.changedTouches[0]) return;

				var touch = event.changedTouches[0];
				this.touchstart_position = {
					x: touch.clientX,
					y: touch.clientY
				};
			}
		}, {
			key: 'touchmove',
			value: function touchmove() {
				if (!event.changedTouches[0]) return;

				var touch = event.changedTouches[0];
				this.touchmove_position = {
					x: touch.clientX,
					y: touch.clientY
				};
			}
		}, {
			key: 'touchend',
			value: function touchend() {
				if (!this.touchstart_position) return;
				if (!this.touchmove_position) return;

				var x_distance = this.touchstart_position.x - this.touchmove_position.x;
				var y_distance = this.touchstart_position.y - this.touchmove_position.y;

				var distance = Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2));

				this.touchstart_position = null;
				this.touchmove_position = null;

				if (distance >= DISTANCE_THRESHOLD) event.stopPropagation();
			}
		}]);

		return Tap;
	}();

	module.exports = Tap;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CountDown = function () {
		function CountDown(year, month, day, hour, minute, second) {
			_classCallCheck(this, CountDown);

			this.$countdown = (0, _jquery2.default)('.countdown-container');

			year = year || 2020;
			month = month || 1;
			day = day || 1;
			hour = hour || 0;
			minute = minute;
			second = second || 0;

			this.goal_date = new Date(year, month, day, hour, minute, second);

			this.init();
		}

		_createClass(CountDown, [{
			key: 'init',
			value: function init() {
				setInterval(this.render.bind(this), 1 * 1000);
			}
		}, {
			key: 'render',
			value: function render() {
				var now_date = new Date();
				var diff = this.goal_date - now_date;
				var a_day = 24 * 60 * 60 * 1000; // 24HのMillisecond
				var remain_day = Math.floor(diff / a_day); // 残りの日
				var remain_hour = Math.floor(diff % a_day / (60 * 60 * 1000)); // 残り時間
				var remain_minute = Math.floor(diff % a_day / (60 * 1000)) % 60; // 残りの分
				var remain_second = Math.floor(diff % a_day / 1000) % 60 % 60; // 残りの秒数

				this.$countdown.html('あと' + remain_day + '日' + remain_hour + '時間' + remain_minute + '分' + remain_second + '秒');
			}
		}]);

		return CountDown;
	}();

	module.exports = CountDown;

/***/ }
]);