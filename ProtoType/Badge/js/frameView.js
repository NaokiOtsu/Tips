(function(window) {
  'use strict';

  function FrameView() {
    this.$childs = $('#frame-list li');
    this.$frame_1 = $('#frame-1');
    this.$frame_2 = $('#frame-2');
    this.$frame_3 = $('#frame-3');
  }

  window.app = window.app || {};
  window.app.FrameView = FrameView;
})(window);