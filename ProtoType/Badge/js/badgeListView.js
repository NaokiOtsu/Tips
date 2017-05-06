(function(window) {
  'use strict';

  function BadgeListView() {
    this.$badge_list = $('#badge-list');
    this.$childs = this.$badge_list.find('li');
  }

  window.app = window.app || {};
  window.app.BadgeListView = BadgeListView;
})(window);