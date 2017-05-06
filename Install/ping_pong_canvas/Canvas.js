var App = App || {};


(function() {
  'use strict';
  
  var ctx;
  var canvas = document.getElementById('canvas');
  
  if (!canvas || !canvas.getContext) return;
  
  ctx = canvas.getContext('2d');
  
  // export
  App.Canvas = {
    'canvas': canvas,
    'ctx': ctx
  };
})();

