(function() {
  'use strict';
  
  var $pages;
  
  function init() {
    $pages = $("[data-role='page']").detach();
    $(window).on('hashchange', urlChangeHandler).trigger('hashchange');
  }
  
  function urlChangeHandler() {
    var page_id = parseUrl(window.location.hash);
    $pages
      .detach()
      .filter('.page' + page_id)
      .appendTo('article');
    console.log('page_id', page_id)
  }
  
  function parseUrl(url) {
    return url.slice(1) || 1;
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();