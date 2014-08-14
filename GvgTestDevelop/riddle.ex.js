(function(global, doc, isArray, toArray, enc, undefined) {
	'use strict';

	r.getEnv = function() {
		var ua = window.navigator.userAgent,
			ptn = {iOS: /iP(hone|od|ad)/, android: /Android/},
			os = ptn.iOS.test(ua) ? 'iOS' : ptn.android.test(ua) ? 'android' : '',
			orientation = 'orientation' in window && 'onorientationchange' in window,
			touch = 'ontouchend' in doc,
			cssTransitions = 'WebKitTransitionEvent' in window,
			pushState = 'pushState' in history && 'replaceState' in history,
			isIOS =  (function() { return os === 'iOS'; })(),
			isAndroid = (function() { return os === 'android'; })(),
			isMobile = (function() { return isIOS || isAndroid; })(),
			isTouchDevice = (function() { return touch; })();

		return {
			orientation: orientation, 
			touch: touch,
			cssTransitions: cssTransitions,
			pushState: pushState,
			isIOS: isIOS,
			isAndroid: isAndroid,
			isMobile: isMobile,
			isTouchDevice: isTouchDevice
		};
	};

	r.parseJSON = function(text) {
		if (!text) {
			return {};
		} else if (typeof text === "object") {
			return text;
		}
		// idea from twitter@uupaa
		var obj;

		try {
			obj = JSON.parse(text);
			return obj;
		} catch (p_o) {}
		try {
			/*jshint evil: true */
			obj = (new Function('return ' + text))();
			return obj;
		} catch (o_q) {
			throw new Error("Can't parse text to json");
		}
	};

	r.proxy = function(f, context) {
		 return function(){ return f.apply(context, arguments); };
	};

	r.extend = function(obj){
		toArray.call(arguments, 1).forEach(function(source) {
		var key;
		for (key in source)
			if (source[key] !== undefined) {
				obj[key] = source[key];
			}
		});
		return obj; 
	};

	r.fn.get = function(index) {
		return this[index || 0];
	};

	r.fn.find = function(query) {
		var res = [], i, l = this.length;

		for (i = 0; i < l; i++) {
			res = res.concat(toArray.call(r(query, this[i][0])));
		}
		return r(res);
	};

	r.fn.on = r.fn.bind;
	r.fn.off = r.fn.unbind;
})(
	this,
	document,
	Array.isArray || function(a) { return a instanceof Array },
	Array.prototype.slice,
	encodeURIComponent
);
