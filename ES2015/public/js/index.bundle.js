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

	var _Carousel = __webpack_require__(9);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(function () {
		init();
	});

	var init = function init() {
		new _Tap2.default();
		new _Carousel2.default();
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

	var _Device = __webpack_require__(10);

	var _Device2 = _interopRequireDefault(_Device);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WIDTH = 300;

	var DOM_ELEMENT = {
		'list': '.carousel-list',
		'prev': '.carousel-prev',
		'next': '.carousel-next',
		'thumb': '.carousel-thumb li'
	};

	var CLASS_NAME = {
		'active': 'active'
	};

	var Carousel = function () {
		function Carousel() {
			_classCallCheck(this, Carousel);

			this.$list = (0, _jquery2.default)(DOM_ELEMENT.list);
			this.$prev = (0, _jquery2.default)(DOM_ELEMENT.prev);
			this.$next = (0, _jquery2.default)(DOM_ELEMENT.next);
			this.$thumb = (0, _jquery2.default)(DOM_ELEMENT.thumb);

			this.counter = 0;
			this.length = (0, _jquery2.default)(DOM_ELEMENT.list + ' li').length;

			this.init();
		}

		_createClass(Carousel, [{
			key: 'init',
			value: function init() {
				this.bindEvents();
				this.thumbCheck();
			}
		}, {
			key: 'bindEvents',
			value: function bindEvents() {
				var touch_end = _Device2.default.isTouchable ? 'touchend' : 'click';

				this.$prev.on(touch_end, this.onPrev.bind(this));
				this.$next.on(touch_end, this.onNext.bind(this));
			}
		}, {
			key: 'onPrev',
			value: function onPrev() {
				this.counter = this.counter - 1;

				if (this.counter <= -1) {
					this.counter = this.length - 1;
				}

				this.slide();
			}
		}, {
			key: 'onNext',
			value: function onNext() {
				this.counter = this.counter + 1;

				if (this.counter >= this.length) {
					this.counter = 0;
				}

				this.slide();
			}
		}, {
			key: 'slide',
			value: function slide() {
				this.$list.css({
					'-webkit-transform': 'translate3d(' + -(this.counter * WIDTH) + 'px, 0, 0)'
				});
				this.thumbCheck();
			}
		}, {
			key: 'thumbCheck',
			value: function thumbCheck() {
				this.$thumb.removeClass(CLASS_NAME.active);
				this.$thumb.eq(this.counter).addClass(CLASS_NAME.active);
			}
		}]);

		return Carousel;
	}();

	module.exports = Carousel;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Device = function Device() {
		_classCallCheck(this, Device);
	};

	Device.isTouchable = function () {
		var is_touchable = false;

		try {
			document.createEvent('TouchEvent');
			is_touchable = true;
		} catch (e) {}

		return is_touchable;
	};

	Device.isIOS = function () {
		var user_agent = window.navigator.userAgent;
		var is_ios = /iphone|ipad|ipod/i.test(user_agent);

		Device.isIOS = function () {
			return is_ios;
		};

		return is_ios;
	};

	Device.isAndroid = function () {
		var user_agent = window.navigator.userAgent;
		var is_android = /android/i.test(user_agent);

		Device.isAndroid = function () {
			return is_android;
		};

		return is_android;
	};

	Device.getOSVersion = function () {
		var user_agent = window.navigator.userAgent;

		var version = '';
		var matches;
		if (Device.isIOS()) {
			matches = user_agent.match(/iphone os ([0-9_]+)/i) || [];
			if (matches.length === 2) version = matches[1];

			version = version.replace(/\_/g, '.');
		} else if (Device.isAndroid()) {
			matches = user_agent.match(/ Android ([0-9.]+)/i) || [];
			if (matches.length === 2) version = matches[1];
		}

		Device.getOSVersion = function () {
			return version;
		};

		return version;
	};

	Device.getOSMajorVersion = function () {
		var version = Device.getOSVersion();

		if (!version) return '';

		var matches = version.match(/^([0-9]+)\.?/) || [];
		if (matches.length !== 2) return '';

		Device.getOSMajorVersion = function () {
			return matches[1];
		};

		return matches[1];
	};

	module.exports = Device;

/***/ }
]);