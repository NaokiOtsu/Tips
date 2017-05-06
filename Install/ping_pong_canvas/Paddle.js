var App = App || {};

(function() {
  'use strict';
  
  var canvas = App.Canvas.canvas;
  var ctx = App.Canvas.ctx;
  
  if (!canvas || !canvas.getContext) return;
  
  function Paddle(w, h) {
    this.w = w;
    this.h = h;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.$canvas = $('#canvas');
  }
  
  Paddle.prototype.draw = function() {
    ctx.fillStyle = "#3756FF";
    ctx.fillRect(this.x - this.w / 2, this.y, this.w, this.h); 
  };
  
  Paddle.prototype.move = function(mouseX) {
    this.x = mouseX - this.$canvas.offset().left;
  };
  
  Paddle.prototype.levelUp = function(mouseX) {
    this.w *= 0.8;
  };
  
  // export
  App.Paddle = Paddle;
  
})();