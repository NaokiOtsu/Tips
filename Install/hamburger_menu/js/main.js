(function(){
  'use strict';

  var CLASS_NAME = 'menu-open';

  var show  = document.getElementById('show');
  var main  = document.getElementById('main');
  var menu  = document.getElementById('menu');
  var links = document.querySelectorAll('#menu a');

  function addEventListeners() {
    show.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleMenu);
    links.forEach(function (element) {
      element.addEventListener('click', stopPropagation);
    });
  }

  function toggleMenu() {
    event.stopPropagation();

    if (main.className === CLASS_NAME) {
      main.className = '';
      main.removeEventListener('click', toggleMenu);
    } else {
      main.className = CLASS_NAME;
      main.addEventListener('click', toggleMenu);
    }
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  window.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
  });
})();