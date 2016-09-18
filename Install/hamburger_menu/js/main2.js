(function(){
  'use strict';

  var body = document.body;
  var show = document.getElementById('show');
  var hide = document.getElementById('hide');
  var cover = document.getElementById('cover');
  var menu = document.getElementById('menu');
  var link = document.querySelectorAll('#menu a');
  
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
        stopPropagation(event, element);
      });
    });
  }

  function openMenu(){
    body.className = 'menu-open';
  }

  function closeMenu(){
    body.className = '';
  }

  function stopPropagation(event, index){
    console.log(event);
    console.log(index);
    event.stopPropagation();
  }

  window.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
  });

})();