(function(window) {
  'use strict';

  function Controller(model, view) {
    var self = this;
    this.model = model;
    this.view = view;

    // bind
    this.view.bind('toggleAttack', this.view.toggleAttack);

    // delegate
    this.view.$deck_container.on('click', 'div', function() {
      self.view.deckFigureSelect(self.model.deck_json.deck.figures);
    });
    this.view.$user_figure_container.on('click', 'div', function() {
      self.view.userFigureSelect(self.model.figure_json.figures);
    });

    // Deckの取得
    $.ajax({
      url: './json/deck.json',
      dataType: 'json',
      data: {},
      timeout: 1000,
      success: this.successDeck.bind(this),
      error: this.errorDeck.bind(this),
      complete: this.completeDeck.bind(this)
    });

    // Figureの取得
    $.ajax({
      url: './json/figure.json',
      dataType: 'json',
      data: {},
      timeout: 1000,
      success: this.successFigure.bind(this),
      error: this.errorFigure.bind(this),
      complete: this.completeFigure.bind(this)
    });
  }

  Controller.prototype.successDeck = function(json) {
    this.model.deck_json = json;
    this.view.initializeRenderDeck(this.model);
  };

  Controller.prototype.errorDeck = function() {
    console.log('error');
  };

  Controller.prototype.completeDeck = function() {
    // console.log('complete');
  };

  Controller.prototype.successFigure = function(json) {
    this.model.figure_json = json;
    this.view.initializeRenderFigure(this.model);
  };

  Controller.prototype.errorFigure = function() {
    console.log('error');
  };

  Controller.prototype.completeFigure = function() {
    // console.log('complete');
  };

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);