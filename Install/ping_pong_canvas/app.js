var App = App || {};

$(function() {
  'use strict';
  
  var canvas = App.Canvas.canvas;
  var ctx = App.Canvas.ctx;
  
  if (!canvas || !canvas.getContext) return;
  
  var paddle; // 青いバーのインスタンス
  var ball;   // ボールのインスタンス
  var label;   // スコアのインスタンス
  var mouseX; // paddleのX座標
  var isPlaying = false;
  var score = 0;
  
  var $btn = $('#btn');
  
  $.subscribe('gameover', gameover);
  $.subscribe('collision', collision);
  
  // STARTボタンを押したら開始
  $btn.on('click', function() {
    if (isPlaying) return;
    
    isPlaying = true;
    $btn.fadeOut();
    
    init();
    update();
  });
  
  // Paddleをマウス位置に沿って動かす
  $('body').on('mousemove', function(event) {
    mouseX = event.pageX;
  });
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 初期化
  function init() {
    paddle = new App.Paddle(100, 10); // paddleの初期化
    ball = new App.Ball(rand(10, 80), rand(5, 15), rand(-5, 5), rand(3, 5), 6); // ballの初期化
    label = new App.Label(10, 30); // labelの初期化
  }
  
  // canvasをclear
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // 毎フレーム処理
  function update() {
    if (!isPlaying) return;
    
    requestAnimationFrame(function() {
      clear();
      label.draw('SCORE: ' + score);
      paddle.draw();
      paddle.move(mouseX);
      ball.draw();
      ball.move();
      ball.collisionCheck(paddle.x, paddle.y, paddle.w, paddle.h);
      update();
    });
  }
  
  // ボールがpaddleに当たったら
  function collision() {
    score++;
    ball.levelUp();
    paddle.levelUp();
  }
  
  // ゲームオーバー
  function gameover() {
    isPlaying = false;
    score = 0;
    $btn.text('REPLAY').fadeIn();
  }
});