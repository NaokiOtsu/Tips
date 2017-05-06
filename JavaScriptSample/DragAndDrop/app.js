(function() {
  'use strict';

  function DragAndDrop() {
    this.box = document.querySelector('.box');

    this.bindEvents();
  }

  DragAndDrop.prototype.bindEvents = function() {
    this.box.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.box.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.box.addEventListener('mouseup', this.onMouseUp.bind(this));
  };

  DragAndDrop.prototype.onMouseDown = function() {
    console.log(111);
  };

  DragAndDrop.prototype.onMouseMove = function() {
    console.log(222);
  };

  DragAndDrop.prototype.onMouseUp = function() {
    console.log(333);
  };

  window.addEventListener('DOMContentLoaded', function() {
    new DragAndDrop();
  });
})();