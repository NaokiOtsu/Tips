var App = App || {};

(function() {
  'use strict';
  
  var canvas = App.Canvas.canvas;
  var ctx = App.Canvas.ctx;
  
  if (!canvas || !canvas.getContext) return;
  
  function Ball(x, y, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
  }
  
  Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = '#FF3C3F';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
    ctx.fill();
  };
  
  Ball.prototype.move = function() {
    this.x += this.vx;
    this.y += this.vy;
    
    // 右端 or 左端
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.vx *= -1;
    }
    // 上端
    if (this.y - this.r < 0) {
      this.vy *= -1;
    }
    // 下端
    if (this.y + this.r > canvas.height) {
      console.log('game over');
      $.publish('gameover');
    }
  };
  
  // 衝突判定
  Ball.prototype.collisionCheck = function(paddleX, paddleY, paddleW, paddleH) {
    // if ((Y軸の判定) && (X軸の判定))
    if ((this.y + this.r > paddleY && this.y + this.r < paddleY + paddleH) && (this.x > paddleX - paddleW / 2 && this.x < paddleX + paddleW / 2)) {
      this.vy *= -1;
      $.publish('collision');
    }
  };
  
  // レベルアップ
  Ball.prototype.levelUp = function() {
    this.vy *= 1.2;
    this.vx *= 1.2;
  }
  
  // export
  App.Ball = Ball;
  
})();