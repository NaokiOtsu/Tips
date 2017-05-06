(function() {
  'use strict';

  var DATA_ATTR_NAME = {
    'trigger': 'data-accordion-trigger',
    'contents': 'data-accordion-contents'
  };

  var CLASS_NAME = {
    'open': 'is-open'
  };

  function Accordion(config) {
    this.heighters = {};
    this.is_single = config.is_single ? true : false;
    this.$prev_element;

    this.$dts = $('['+ DATA_ATTR_NAME.trigger +']');
    this.$dds = $('['+ DATA_ATTR_NAME.contents +']');
    
    this.setElementsHeight();
    this.hideConntents();
    this.addEventListeners();
  }

  Accordion.prototype.setElementsHeight = function() {
    this.$dds.each(function(index, element) {
      var $element = $(element);
      this.heighters[$element.attr(DATA_ATTR_NAME.contents)] = $element.height();
    }.bind(this));
  };

  Accordion.prototype.hideConntents = function() {
    this.$dds.each(function(index, element) {
      $(element).css({ 'height': 0 });
    });
  };

  Accordion.prototype.trigger = function() {
    var target = event.currentTarget;
    var data = target.getAttribute(DATA_ATTR_NAME.trigger);
    this.toggle(data);
  };

  Accordion.prototype.toggle = function(data) {
    var $target = $('['+ DATA_ATTR_NAME.contents +'="'+ data +'"]');

    // １つだけ表示のフラグがtrueで、prev_elementがクリックしたコンテンツじゃなかったら、閉じる
    if (this.is_single && this.$prev_element && this.$prev_element[0] !== $target[0]) {
      this.$prev_element.css({ 'height': 0 });
      this.$prev_element.removeClass(CLASS_NAME.open);
    }

    // コンテンツの開閉
    if ($target.hasClass(CLASS_NAME.open)) {
      $target.css({ 'height': 0 });
      $target.removeClass(CLASS_NAME.open);
    } else {
      $target.css({ 'height': this.heighters[data] });
      $target.addClass(CLASS_NAME.open);
    }

    this.$prev_element = $target; // 押したElementを格納しておく
  };

  Accordion.prototype.addEventListeners = function() {
    this.$dts.on('click', this.trigger.bind(this));
  };

  window.addEventListener('DOMContentLoaded', function() {
    new Accordion({
      'is_single': true
    });
  });
})();