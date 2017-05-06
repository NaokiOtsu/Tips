(function() {
  'use strict';

  var stage = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(
    256, 256,
    {antialias: false, transparent: false, resolution: 1}
  );

  document.body.appendChild(renderer.view);
  
  renderer.view.style.position = 'absolute';
  renderer.view.style.display = 'block';
  renderer.autoResize = true;
  renderer.resize(window.innerWidth, window.innerHeight);
  renderer.backgroundColor = 0xeeeeee;

  PIXI.loader
    .add('./images/sample.png')
    .load(setup);
  
  function setup() {
    var sprite = new PIXI.Sprite(
      PIXI.loader.resources['./images/sample.png'].texture
    );

    stage.addChild(sprite);
    renderer.render(stage);
  }

  

  
})();