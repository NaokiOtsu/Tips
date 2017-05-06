(function() {
  'use strict';
  
  var canvas = document.getElementById('stage');
  var context;
  var image;
  var IMAGE_URL = '15puzzle.png';
  var tiles = [];
  var ROW_COUNT = 4;
  var COL_COUNT = 4;
  var PIC_WIDTH = 280;
  var PIC_HEIGHT = 280;
  var TILE_WIDTH = PIC_WIDTH / COL_COUNT;
  var TILE_HEIGHT = PIC_HEIGHT / ROW_COUNT;
  var UDLR = [
    [ 0, -1],
    [ 0,  1],
    [-1,  0],
    [ 1,  0],
  ];
  var moveCount = 100;

  if (!canvas.getContext) {
    alert('Canvas not supported..');
    return;
  }

  context = canvas.getContext('2d');

  image = document.createElement('img');
  image.src = IMAGE_URL;
  image.addEventListener('load', function() {
    initTiles();
    moveBlank(moveCount);
    drawPuzzle();
  });

  function initTiles() {
    var row, col;
    for (row = 0; row < ROW_COUNT; row++) {
      tiles[row] = [];
      for (col = 0; col < COL_COUNT; col++) {
        tiles[row][col] = row * COL_COUNT + col;
      }
    }
    tiles[ROW_COUNT - 1][COL_COUNT - 1] = -1;
  }

  function drawPuzzle() {
    var row, col;
    var sx, sy; // 起点
    var dx, dy; // 出力先

    for (var row = 0; row < ROW_COUNT; row++) {
      for (var col = 0; col < COL_COUNT; col++) {
        dx = col * TILE_WIDTH;
        dy = row * TILE_HEIGHT;

        if (tiles[row][col] === -1) {
          context.fillStyle = '#eeeeee';
          context.fillRect(dx, dy, TILE_WIDTH, TILE_HEIGHT);
        } else {
          sx = (tiles[row][col] % COL_COUNT) * TILE_WIDTH;
          sy = Math.floor((tiles[row][col] / COL_COUNT)) * TILE_HEIGHT;
          context.drawImage(image, sx, sy, TILE_WIDTH, TILE_HEIGHT, dx, dy, TILE_WIDTH, TILE_HEIGHT)
        }
      }
    }
  }

  function checkResult() {
    var row, col;
    for (row = 0; row < ROW_COUNT; row++) {
      for (col = 0; col < COL_COUNT; col++) {
        if (row === ROW_COUNT - 1 && col === COL_COUNT - 1) {
          return true;
        }
        if (tiles[row][col] !== row * COL_COUNT + col) {
          return false;
        }
      }
    }
  }

  function moveBlank(count) {
    var blankRow, blankCol;
    var targetPosition;
    var targetRow, targetCol;

    blankRow = ROW_COUNT - 1;
    blankCol = COL_COUNT - 1;

    while (true) {
      targetPosition = Math.floor(Math.random() * UDLR.length);
      targetRow = blankRow + UDLR[targetPosition][1]
      targetCol = blankCol + UDLR[targetPosition][0]
      if (targetRow < 0 || targetRow >= ROW_COUNT) {
        continue;
      }
      if (targetCol < 0 || targetCol >= COL_COUNT) {
        continue;
      }
      tiles[blankRow][blankCol] = tiles[targetRow][targetCol];
      tiles[targetRow][targetCol] = -1;
      blankRow = targetRow;
      blankCol = targetCol;
      if (!--count) {
        break;
      }
    }
  }

  canvas.addEventListener('click', function(e) {
    var x, y;
    var rect;
    var row, col;
    var targetRow, targetCol;
    rect = e.target.getBoundingClientRect();

    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    row = Math.floor(y / TILE_HEIGHT);
    col = Math.floor(x / TILE_WIDTH);

    if (tiles[row][col] === -1) {
      return;
    }
    
    for (var i = 0; i < UDLR.length; i++) {
      targetRow = row + UDLR[i][1];
      targetCol = col + UDLR[i][0];
      if (targetRow < 0 || targetRow >= ROW_COUNT) {
        continue;
      }
      if (targetCol < 0 || targetCol >= COL_COUNT) {
        continue;
      }
      if (tiles[targetRow][targetCol] === -1) {
        tiles[targetRow][targetCol] = tiles[row][col];
        tiles[row][col] = -1;
        drawPuzzle();
        console.log(111111);

        if (checkResult()) {
          alert('Game Clear')
        }
      }
    }
  });
})();