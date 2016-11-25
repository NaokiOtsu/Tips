window.addEventListener('DOMContentLoaded', function() {
  var list = document.querySelector('.list');
  var items = document.querySelector('.item');
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');

  list.style.transform = 'translateX(-200px)';

  next.addEventListener('click', function() {
    transitionOn();
    list.style.transform = 'translateX(-300px)';
    list.addEventListener('webkitTransitionEnd', nextEnd);
  });

  prev.addEventListener('click', function() {
    transitionOn();
    list.style.transform = 'translateX(-100px)';
    list.addEventListener('webkitTransitionEnd', prevEnd);
  });

  function nextEnd() {
    resetStyle();
    list.appendChild(list.firstElementChild); // listの最後の要素に、最初の要素を持ってくる
    list.removeEventListener('webkitTransitionEnd', nextEnd);
  }

  function prevEnd() {
    resetStyle();
    list.insertBefore(list.lastElementChild, list.firstElementChild); // listの最初の要素の前に、最後の要素を持ってくる
    list.removeEventListener('webkitTransitionEnd', prevEnd);
  }

  function resetStyle() {
    list.style.transition = '';
    list.style.transform = 'translateX(-200px)';
  }

  function transitionOn() {
    list.style.transition = 'transform 166ms ease-out';
  }

});