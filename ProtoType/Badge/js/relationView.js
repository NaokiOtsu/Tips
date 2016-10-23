(function(window) {
  'use strict';

  function RelationView() {
    this.$relation_1 = $('#relation-1');
    this.$relation_2 = $('#relation-2');
    this.$relation_3 = $('#relation-3');
    this.$relation_4 = $('#relation-4');
    this.$relation_5 = $('#relation-5');
  }

  window.app = window.app || {};
  window.app.RelationView = RelationView;
})(window);