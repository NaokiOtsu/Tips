(function(window) {
  'use strict';

  function View() {
    this.$tab_attack = $('#tab-list .attack');
    this.$tab_gs = $('#tab-list .gs');
    this.$tab_combo = $('#tab-list .combo');
    this.$tab_skill = $('#tab-list .skill');

    this.$deck_container = $('#deck-container');
    this.$deck_edit_figure_detail = $('#deck-edit-figure-detail');
    this.$deck_strength = $('#deck-strength');
    this.$user_figure_container = $('#user-figure-container');

    this.$template_deck_edit_figure_detail = $('#deck-edit-figure-detail-template');
    this.$template_user_figure_container = $('#user-figure-container-template');
  }

  // 最初のDeckのrender
  View.prototype.initializeRenderDeck = function(model) {
    var figures = model.deck_json.deck.figures;
    var template = this.$template_deck_edit_figure_detail.html();
    var htmls = [];

    figures.forEach(function(figure) {
      var html = Mustache.render(template, figure);
      htmls.push(html);
    });
    
    this.$deck_container.html(htmls);

    this.initializeRenderDeck = function() {
      this.$deck_container.html(htmls);
    }.bind(this)
  };

  // 最初のFigureのrender
  View.prototype.initializeRenderFigure = function(model) {
    var figures = model.figure_json.figures;
    var template = this.$template_user_figure_container.html();
    var htmls = [];
    
    figures.forEach(function(figure) {
      var html = Mustache.render(template, figure);
      htmls.push(html);
    });

    this.$user_figure_container.html(htmls);
  };

  // 攻がクリックされた時
  View.prototype.toggleAttack = function() {
    this.initializeRenderDeck();
  };

  // デッキのフィギュアが選択された時
  View.prototype.deckFigureSelect = function() {
    this.$deck_container.find('div').css({ 'border': 'none' });
    $(event.target).css({
      'border': '1px solid #333333'
    });
  };

  // 所持フィギュアが選択された時
  View.prototype.userFigureSelect = function(figures) {
    var index = $(event.target).index();

    this.changeDeckFigure(1, figures[index]);
  };

  // デッキのフィギュアを選択したフィギュアに変更
  View.prototype.changeDeckFigure = function(select, figure) {
    var template = this.$template_deck_edit_figure_detail.html();
    var html = Mustache.render(template, figure);
    
    this.$deck_container.find('div').eq(0).replaceWith(html);
  };

  

  // イベントのbind
  View.prototype.bind = function(event, handler) {
    if (event === 'toggleAttack') {
      this.$tab_attack.on('click', handler.bind(this));
    }
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);