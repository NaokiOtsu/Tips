var App = App || {};

(function() {
  'use strict';
  
  var canvas = App.Canvas.canvas;
  var ctx = App.Canvas.ctx;
  
  if (!canvas || !canvas.getContext) return;
  
  function Label(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Label.prototype.draw = function(text) {
    ctx.font = 'bold 14px "Century Gothic"';
    ctx.fillStyle = "#2247FF";
    ctx.textAlign = 'left';
    ctx.fillText(text, this.x, this.y);
  };
  
  // export
  App.Label = Label;
  
})();