;(function(global, slice, encode, undefined) {

var $ = global.tt || global.zepto || global.jQuery || global.r || {},
	document = global.document,
	ua = global.navigator.userAgent,
	setTimeout = global.setTimeout,
	clearTimeout = global.clearTimeout,
	clearInterval = global.clearInterval,
	scrollTo = global.scrollTo,
	parse = $.parseJSON || JSON.parse,
	uiPrefix = 'mbgaui-',
	dataPrefix = 'data-';

$.fn = $.fn || {};

var Env = $.env || {
	ios: /iP(hone|od|ad)/.test(ua), android: /Android/.test(ua)
};

Env.support = {
	orientation: 'orientation' in global && 'onorientationchange' in global,
	touch: Env.supportTouch || 'ontouchend' in document,
	cssTransitions: 'WebKitTransitionEvent' in global,
	pushState: 'pushState' in history && 'replaceState' in history
};

var Util = {
	toArray: function(arg) {
		return slice.call(arg);
	},
	serialize: function(obj) {
		var i = 0, arr = [];

		if (Util.isPlainObject(obj)) {
			$.each(obj, function(key, value) {
				arr[i++] = key + '=' + value;
			});
		} else if (obj.get && obj.get(0).tagName.toLowerCase() === 'form') {
			obj.find('input,select,textarea').each(function() {
				if (Util.isInputElement(this)) {
					arr[i++] = this.name + '=' + this.value;
				}
			});
		}

		return arr.join('&');
	},
	scroll: function(x, y, i) {
		setTimeout(function() {scrollTo(x || 0, y || 1);}, i || 0);
	},
	clearTimer: function(timerId) {
		if (timerId) {
			clearTimeout(timerId);
			clearInterval(timerId);
		}
		return null;
	},
	isPlainObject: function(obj) {
		if (toString.call(obj) !== '[object Object]') return false;

		var key,
			f = typeof obj.constructor === 'function' && obj.constructor.prototype;

		if (!f || !hasOwnProperty.call(f, 'isPrototypeOf')) return false;

		for (key in obj) {};
		return key === undefined || hasOwnProperty.call(obj, key);
	},
	isFormElement: function(element) {
		return !~'input select textarea'.split(' ')
			.indexOf(element.tagName.toLowerCase());
	},
	isInputElement: function(element) {
		if (!element || element.tagName.toLowerCase() !== 'input') return false;
		var type = element.type;
		return type !== 'submit' && type !== 'reset';
	},
	hasDeviceId: function(deviceId) {
		return !~ua.indexOf(deviceId);
	},
	isMobile: function() {
		return Env.ios || Env.android;
	},
	createEvent: function(type) {
		var event = document.createEvent('Events');
		event.initEvent(type, true, true);

		if (!('defaultPrevented' in event)) {
			event.defaultPrevented = false;
			var prevent = event.preventDefault;
			event.preventDefault = function() {
				this.defaultPrevented = true;
				prevent.call(this);
			}
		}

		return event;
	},
	getEventObj: function(e) {
		return e.changedTouches ? e.changedTouches[0] : e.touches ? e.touches[0] : e;
	},
	capitalize: function(str) {
		return typeof str == 'string' ?
		str.charAt(0).toUpperCase() + str.slice(1) : '';
	}
};

var UI = {
	_prefix: uiPrefix,
	_pattern: /-+(.)?/g,

	_classNames: (function(names, obj, i) {
		var len = names.length;
		for (; i < len; i++) obj[names[i]] = uiPrefix + names[i];
		return obj;
	})('container active selected visible disabled controller'.split(' '), {}, 0),

	getKeys: function(str) {
		var attr = UI.getDataAttr(str);

		return {
			attr:     attr, 
			selector: UI.getAttrSelector(str),
			data:     UI.getDataKey(attr)
		};
	},
	getDataAttr: function(str) {
		return 'data-' + this._prefix + (typeof str === 'string' ? str : '');
	},
	getAttrSelector: function(str) {
		return '[' + UI.getDataAttr(str) + ']';
	},
	getDataKey: function(str) {
		var res = str.replace(dataPrefix, '')
			.replace(UI._pattern, function(match, chr){
				return chr ? chr.toUpperCase() : '' 
			});
		return res + 'Instance';
	},
	getClassName: function(key) {
		return UI._classNames[key] || '';
	},
	isDisabled: function(element) {
		return (element.className.match(new RegExp('(?:^|\\s+)' + UI.getClassName('disabled') + '(?:\\s+|$)')) !== null) ||
			element.disabled === true;
	}
};

if (typeof $.fn.submit !== 'function') {
	$.fn.submit = function() {
		this[0].tagName.toLowerCase() === 'form' && this[0].submit();
	}
}

if (typeof $.fn.eq !== 'function') {
	$.fn.eq = function(index) {
		if (typeof index !== 'number' || index < 0) return $();
		var element = this[index];
		return $(element ? element : '');
	}
}

global.mbga = {
	$:     $,
	Env:   Env,
	Util:  Util,
	UI:    UI
};

})(this.self || global, [].slice, encodeURIComponent);
