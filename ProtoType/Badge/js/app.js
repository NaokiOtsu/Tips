(function(window) {
  'use strict';

  window.addEventListener('DOMContentLoaded', function() {
    var model = {};
    model.frame_model = new app.FrameModel();
    
    var view = {};
    view.relation_view = new app.RelationView();
    view.frame_view = new app.FrameView();
    view.figure_detail_view = new app.FigureDetailView();
    view.badge_list_view = new app.BadgeListView();

    var controller = new app.Controller(model, view);
  });
})(window);