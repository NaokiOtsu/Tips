(function(){
  'use strict';

  var CLASS_NAME = 'menu-open';

  var body  = document.body;
  var show  = document.getElementById('show');
  var hide  = document.getElementById('hide');
  var cover = document.getElementById('cover');
  var menu  = document.getElementById('menu');
  var link  = document.querySelectorAll('#menu a');
  
  function addEventListeners() {
    show.addEventListener('click', openMenu);
    hide.addEventListener('click', closeMenu);
    cover.addEventListener('click', closeMenu);
    menu.addEventListener('click', closeMenu);

    // for (var i = 0; i < link.length; i++) {
    //   (function(i) {
    //     link[i].addEventListener('click', function(event) {
    //       stopPropagation(event, i)
    //     });
    //   })(i);
    // }
    link.forEach(function(element, index) {
      element.addEventListener('click', function(event) {
        stopPropagation(event);
      });
    });
  }

  function openMenu(){
    body.className = CLASS_NAME;
  }

  function closeMenu(){
    body.className = '';
  }

  function stopPropagation(event){
    event.stopPropagation();
  }

  window.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
  });

})();