(function() {
  'use strict';

  // タッチイベントがあるかどうか
  function isTouchEvent() {
    var is_touch_event = false;
    try {
      document.createEvent('TouchEvent');
      is_touch_event = true;
    } catch (e) {
    }

    return is_touch_event;
  }

  // iOSかどうか
  function isIOS() {
    var ua = window.navigator.userAgent;
    var is_ios = /iphone|ipad|ipod/i.test(ua);

    return is_ios;
  }

  // Androidかどうか
  function isAndroid() {
    var ua = window.navigator.userAgent;
    var is_android = /android/i.test(ua);

    return is_android;
  }

  // バージョンを返す
  function getVersion() {
    var ua = window.navigator.userAgent;
    var version = '';
    var matches;

    if (isIOS()) {
      matches = ua.match(/ OS ([0-9_]+)/) || [];
      if (matches.length === 2) version = matches[1];
      version = version.replace(/_/g, '.');
    } else if (isAndroid()) {
      matches = ua.match(/ Android ([0-9.]+)/) || [];
      if (matches.length === 2) version = matches[1];
    }

    return version; 
  }

  // 使う時
  console.log('タッチイベントがあるか: ' + isTouchEvent());
  console.log('iOSかどうか: ' + isIOS());
  console.log('Androidかどうか: ' + isAndroid());
  console.log('バージョンが何か: ' + getVersion());
})();