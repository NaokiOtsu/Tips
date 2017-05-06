(function() {
  'use strict';

  var canvas;
  var ctx;
  var Ball;
  var balls = [];
  var Stage;
  var stage;
  
  canvas = document.getElementById('mycanvas');
  canvas.style.backgroundColor = '#efefef';
  
  if (!canvas || !canvas.getContext) return false;

  ctx = canvas.getContext('2d');

  function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }



  function adjustPosition(pos, r, max) {
    if (pos - r < 0) {
      return r;
    } else if (pos + r > max) {
      return max - r;
    } else {
      return pos;
    }
  }

  canvas.addEventListener('click', function(e) {
    var x, y, r;
    var rect;

    // x = rand(100, 400);
    // y = rand(100, 200);
    rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    r = rand(0, 100) < 20 ? rand(50, 80) : rand(10, 35);

    // if (x - r < 0) x = r;
    // if (y - r < 0) y = r;
    // if (x + r > canvas.width) x = canvas.width - r;
    // if (y + r > canvas.height) y = canvas.height - r;
    x = adjustPosition(x, r, canvas.width);
    y = adjustPosition(y, r, canvas.height);
    
    balls.push(new Ball(x, y, r))
  });

  Ball = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = rand(-10, 10);
    this.vy = rand(-10, 10);
    this.color = 'hsla('+ rand(0, 360) +', '+ rand(60, 100) +'%, '+ rand(50, 60) +'%, '+ Math.random() +')';
  };

  Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.closePath();
    ctx.fill();
  };

  Ball.prototype.move = function () {
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.vx *= -1;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.vy *= -1;
    }

    this.x += this.vx;
    this.y += this.vy;
  };

  // var ball = new Ball(rand(100, 200), rand(100, 200), rand(10, 50));
  // ball.draw();

  Stage = function () {};

  Stage.prototype.update = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].move();
    }

    setTimeout(function() {
      this.update();
    }.bind(this), 30);
  }

  stage = new Stage();
  stage.update();

})();