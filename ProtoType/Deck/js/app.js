(function(window) {
  'use strict';

  function Deck() {
    this.model = new app.Model();
    this.view = new app.View();
    this.controller = new app.Controller(this.model, this.view);
  }

  var deck = new Deck();
  
})(window);