(function(window) {
  'use strict';

  var _ = require('underscore');

  function Observer() {
    this.listeners = {};
  }

  // イベントの登録
  Observer.prototype.on = function(event, func) {
    if (! this.listeners[event] ) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(func);
  };

  // イベントの削除
  Observer.prototype.off = function(func) {
    var ref = this.listeners[event];
    var len = ref.length;
    
    _.times(len, function(index) {
      var listener = ref[index];
      if (listener === func) {
        ref.splice(i, 1);
      }
    });
  };

  // イベントの実行
  Observer.prototype.trigger = function(event) {
    var ref = this.listeners[event];
    var len = ref.length;
    
    _.times(len, function(index) {
      var listener = ref[index];
      
      if (typeof listener === 'function') listener();
    });
  };

  module.exports = Observer; // export

})(window);