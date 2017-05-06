(function(window) {
  'use strict';

  function Model() {

  }

  Model.prototype.hoge = function(str, callback) {
    console.log(str);
    callback();
  }

  window.app = window.app || {};
  window.app.Model = Model;
})(window);