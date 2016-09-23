(function() {
  'use strict';

  var COL = 4;
  var ROW = 4;
  var NUMBERS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,-1];
  var tiles = []; // tiles[row][cor] = 0;
  var UDLR = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  
  var stage = document.getElementById('stage');
  var triggers;

  function initialize() {
    buildTiles();
    drawStage();
  }

  // 最初のtilesを作る
  function buildTiles() {
    for (var row = 0; row < ROW; row++) {
      tiles[row] = [];
      for (var col = 0; col < COL; col++) {
        tiles[row][col] = Number(NUMBERS.splice(Math.floor(Math.random() * NUMBERS.length), 1));
      }
    }
  }

  // tilesに基づいてstageを描画
  function drawStage() {
    var html = '';

    html += '<ul>';

    for (var row = 0; row < ROW; row++) {
      for (var col = 0; col < COL; col++) {
        if (tiles[row][col] === -1) {
          html += '<li class="empty"></li>';
        } else {
          html += '<li>'+ tiles[row][col] +'</li>';
        }
      }
    }

    html += '</ul>';
    
    stage.innerHTML = html;

    triggers = document.querySelectorAll('#stage li');
    triggers.forEach(function(element) {
      element.addEventListener('click', onTileClick);
    });
  }

  // タイルのクリック処理
  function onTileClick() {
    if (this.className === 'empty') return;
    
    // タイルをクリックした箇所のrowとcolを出して、その上下左右に空白があるかチェックする
    var number = Number(this.innerHTML);
    for (var row = 0; row < ROW; row++) {
      for (var col = 0; col < COL; col++) {
        if (number === tiles[row][col]) {
          checkUDLR(row, col);
          return;
        }
      }
    }
  }

  // クリックした要素の上下左右に空白があるかチェック
  function checkUDLR(row, col) {
    var target_row;
    var target_col;

    for (var i = 0; i < UDLR.length; i++) {
      target_row = row + UDLR[i][0];
      target_col = col + UDLR[i][1];
      
      // タイル外に出てしまう場合はcontinueする
      if (target_row < 0 || target_row >= ROW) continue;
      if (target_col < 0 || target_col >= COL) continue;
      
      // 空白だったら、その要素と空白を入れ替えて、描画しなおす
      if (tiles[target_row][target_col] === -1) {
        tiles[target_row][target_col] = tiles[row][col];
        tiles[row][col] = -1;
        drawStage();
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();