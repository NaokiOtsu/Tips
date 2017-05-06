$(function() {
  'use strict';
  
  var ctx;
  var myPaddle;
  var myBall;
  var mouseX;
  var score;
  var scoreLabel;
  var isPlaying = false;
  var timerId;
  
  var canvas = document.getElementById('mycanvas');
  
  if (!canvas || !canvas.getContext) return;
  
  ctx = canvas.getContext('2d');
  
  var Label = function(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function(text) {
      ctx.font = 'bold 14px "Century Gothic"';
      ctx.fillStyle = "#00aaff";
      ctx.textAlign = 'left';
      ctx.fillText(text, this.x, this.y);
    };
  };
  
  var Ball = function(x, y, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = "#ff0088";
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
      ctx.fill();
    };
    this.move = function () {
      this.x += this.vx;
      this.y += this.vy;
      
      // 左端、右端
      if (this.x + this.r > canvas.width || this.x - this.r < 0) {
        this.vx *= -1;
      }
      if (this.y - this.r < 0) {
        this.vy *= -1;
      }
      if (this.y + this.r > canvas.height) {
        console.log('game over!');
        $('#btn').text('REPLAY').fadeIn();
        isPlaying = false;
      }
    };
    
    this.checkCollision = function(paddle) {
      if ((this.y + this.r > paddle.y && this.y + this.r < paddle.y + paddle.h) && (this.x > paddle.x - paddle.w / 2 && this.x < paddle.x + paddle.w / 2)) {
        this.vy *= -1;
        score++;
        if (score % 1 === 0) {
          this.vy *= 1.2;
          this.vx *= 1.2;
          paddle.w *= 0.8;
        }
      }
    }
    
  };
  
  var Paddle = function(w, h) {
    this.w = w;
    this.h = h;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.draw = function() {
      ctx.fillStyle = "#00aaff";
      ctx.fillRect(this.x - this.w / 2, this.y, this.w, this.h);
    };
    this.move = function() {
      this.x = mouseX - $('#mycanvas').offset().left; 
    };
  };
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function init() {
    isPlaying = true;
    score = 0;
    myPaddle = new Paddle(100, 10);
    myBall = new Ball(rand(50, 250), rand(10, 80), rand(3, 8), rand(3, 8), 6);
    scoreLabel = new Label(10, 25);
    scoreLabel.draw('SCORE: ' + score);
  }
  
  
  function clearStage() {
    ctx.fillStyle = "#aaedff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function update() {
    clearStage();
    scoreLabel.draw('SCORE: ' + score);
    myPaddle.draw();
    myPaddle.move();
    myBall.draw();
    myBall.move();
    myBall.checkCollision(myPaddle);
    timerId = setTimeout(function() {
      update();
    }, 30);
    if (!isPlaying) clearTimeout(timerId);
  }
  
  $('#btn').on('click', function() {
    $(this).fadeOut();
    init();
    update();
  });
  
  $('body').on('mousemove', function(e) {
    mouseX = e.pageX;
  });
  
});