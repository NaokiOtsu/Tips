$(function() {
  'use strict';

  var CLASS_NAME = {
    'active': 'active'
  };

  var current = 0;
  var timer_id;
  var is_playing = false;

  var $thumbs = $('#thumb-list li');
  var $main_image = $('#main img');
  var $prev = $('#prev');
  var $next = $('#next');
  var $play = $('#play');
  var $stop = $('#stop');

  function initialize() {
    $thumbs.eq(current).addClass(CLASS_NAME.active);
    
    $thumbs.on('click', onThumb);
    $prev.on('click', onPrev);
    $next.on('click', onNext);
    $play.on('click', onPlay);
    $stop.on('click', onStop);
  }

  function onThumb() {
    var index = $(this).index();
    
    current = index;
    changeImage();
  }

  function onPrev() {
    current--;
    if (current <= -1) {
      current = $thumbs.length - 1;
    }
    changeImage();
  }

  function onNext() {
    current++;
    if (current >= $thumbs.length) {
      current = 0;
    }
    changeImage();
  }

  function onPlay() {
    if (is_playing) return;

    is_playing = true;
    timer_id = setInterval(function() {
      onNext();
    }, 1000); 
  }

  function onStop() {
    is_playing = false;
    clearInterval(timer_id); 
  }

  function changeImage() {
    $thumbs.removeClass(CLASS_NAME.active);
    $thumbs.eq(current).addClass(CLASS_NAME.active);
    $main_image.attr('src', './images/image'+ (current+1) +'.png')
  }

  initialize();
});