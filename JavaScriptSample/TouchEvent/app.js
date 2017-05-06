(function() {
  'use strict';

  var is_touch = ('ontouchstart' in window) ? true : false;
  var counter = 0;

  function TouchEvent() {
    this.touchstart_position = {};
    this.touchmove_position = {};

    document.getElementById('btn').addEventListener('touchend', function() {
      document.getElementById('result').textContent = counter++;
    });

    var startName = is_touch ? 'touchstart' : 'mousedown';
    var moveName = is_touch ? 'touchmove' : 'mousemove';
    var endName = is_touch ? 'touchend' : 'mouseup';
    document.addEventListener(startName, this.start.bind(this), true);
    document.addEventListener(moveName, this.move.bind(this), true);
    document.addEventListener(endName, this.end.bind(this), true);
    document.addEventListener('touchcancel', this.cancel.bind(this), true);
  }

  TouchEvent.prototype.start = function() {
    if (!event.changedTouches[0]) return;

    var touch = event.changedTouches[0];
    this.touchstart_position = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  TouchEvent.prototype.move = function() {
    if (!event.changedTouches[0]) return;

    var touch = event.changedTouches[0];
    this.touchmove_position = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  TouchEvent.prototype.cancel = function() {
    this.touchstart_position = null;
    this.touchmove_position = null;
  };

  TouchEvent.prototype.end = function() {
    if (!this.touchstart_position) return;
    if (!this.touchmove_position) return;

    var x_distance = this.touchstart_position.x - this.touchmove_position.x;
    var y_distance = this.touchstart_position.y - this.touchmove_position.y;

    var distance = Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2));

    this.touchstart_position = null;
    this.touchmove_position = null;

    if (distance >= 10) event.stopPropagation();
  };

  window.addEventListener('DOMContentLoaded', function() {
    new TouchEvent();
  });
})();