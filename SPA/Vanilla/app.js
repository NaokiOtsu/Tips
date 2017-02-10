(function() {
  'use strict';
  
  var $pages;
  
  function init() {
    $pages = $("[data-role='page']").detach();
    $(window).on('hashchange', urlChangeHandler).trigger('hashchange');
  }
  
  function urlChangeHandler() {
    var page_id = parseUrl(window.location.hash);
    
    var $prevPage = $pages.filter(':visible');
    var $nextPage = $pages.filter('.page' + page_id);
    
    function enter() {
      $pages.detach();
      
      $nextPage
        .removeClass('page-enter')
        .appendTo('article')
        .addClass('page-enter');
    }
    
    if ($prevPage.length > 0) {
      $prevPage
        .addClass('page-leave')
        .on('webkitAnimationEnd', function onFadeOut() {
          $nextPage
            .off('webkitAnimationEnd', onFadeOut)
            .removeClass('page-leave')
            .detach();
        });
        enter();
    } else {
      enter();
    }
  }
  
  function parseUrl(url) {
    return url.slice(1) || 1;
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();