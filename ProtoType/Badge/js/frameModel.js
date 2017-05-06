(function(window) {
  'use strict';

  function FrameModel() {
    this.current_frame;
  }

  // 現在選択中のフレームをセット
  FrameModel.prototype.setFrame = function(num) {
    this.current_frame = num;
  }

  // 現在選択中のフレームを返す
  FrameModel.prototype.getFrame = function() {
    return this.current_frame;
  }

  window.app = window.app || {};
  window.app.FrameModel = FrameModel;
})(window);