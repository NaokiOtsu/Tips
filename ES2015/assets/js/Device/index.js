
class Device {
	constructor() {
		
	}
}

Device.isTouchable = () => {
	var is_touchable = false;
	
	try {
		document.createEvent('TouchEvent');
		is_touchable = true;
	} catch(e) {
	}
	
	return is_touchable;
};

Device.isIOS = () => {
	var user_agent = window.navigator.userAgent;
	var is_ios = /iphone|ipad|ipod/i.test(user_agent);
	
	Device.isIOS = function() {
		return is_ios;
	};
	
	return is_ios;
};

Device.isAndroid = () => {
	var user_agent = window.navigator.userAgent;
	var is_android = /android/i.test(user_agent);
	
	Device.isAndroid = function() {
		return is_android;
	};
	
	return is_android;
};

Device.getOSVersion = () => {
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
	
	Device.getOSVersion = () => {
		return version;
	};
	
	return version;
};

Device.getOSMajorVersion = () => {
	var version = Device.getOSVersion();
	
	if (!version) return '';
	
	var matches = version.match(/^([0-9]+)\.?/) || [];
	if (matches.length !== 2) return '';
	
	Device.getOSMajorVersion = () => {
		return matches[1];
	};
	
	return matches[1];
};

module.exports = Device;