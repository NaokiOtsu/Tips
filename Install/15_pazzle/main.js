(function() {
  'use strict';

  var PANEL_NUM = 16;

  var MAP = [
    [0,0],[0,1],[0,2],[0,3],
    [1,0],[1,1],[1,2],[1,3],
    [2,0],[2,1],[2,2],[2,3],
    [3,0],[3,1],[3,2],[3,3]
  ]

  var UDLR = [
    [0, -1], // UP
    [0,  1], // DOWN
    [-1, 0], // LEFT
    [ 1, 0] // RIGHT
  ];

  var stage = document.getElementById('stage');

  function initalize() {
    createStage();
  }

  function createStage() {
    var dom = '';
    var array = [];
    var panels;

    dom += '<ul>';

    for (var i = 0; i < PANEL_NUM - 1; i++) {
      array.push('<li>'+ i +'</li>');
    }
    array.push('<li class="empty"></li>');

    while (array.length) {
      dom += array.splice(Math.floor(Math.random() * array.length), 1)[0];
    }
    
    dom += '</ul>';

    stage.innerHTML = dom;

    panels = document.querySelectorAll('#stage li');
    panels.forEach(function(element, index) {
      element.addEventListener('click', function() {
        onPanelClick(element, index);
      });

      // data-idをつける
      element.setAttribute('data-id', MAP[index]);
    });
  }

  // パネルのクリック
  function onPanelClick(element, index) {
    if (element.className === 'empty') return;
    
    var current_map_y = MAP[index][0];
    var current_map_x = MAP[index][1];
    var target_map_y;
    var target_map_x;
    // console.log(current_map_x);
    // console.log(current_map_y);
    
    // クリックしたパネルの上下左右を調べる
    for (var i = 0; i < UDLR.length; i++) {
      target_map_y = current_map_y + UDLR[i][1];
      target_map_x = current_map_x + UDLR[i][0];

      // パネル外の時はcontinue
      if (target_map_y < 0 || target_map_y >= 4) continue;
      if (target_map_x < 0 || target_map_x >= 4) continue;

      var target = document.querySelector('[data-id="'+ target_map_y +','+ target_map_x +'"]'); // querySelector([data-id="Y,X"]);
      
      // emptyだったら入れ替える
      if (target.className === 'empty') {
        changeDom(current_map_y, current_map_x);
      }
    }
  }

  function changeDom(x, y) {
    console.log(x);
    console.log(y);
  }

  window.addEventListener('DOMContentLoaded', function() {
    initalize();
  });
})();