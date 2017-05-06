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
    this.prev_element;

    this.dts = document.querySelectorAll('['+ DATA_ATTR_NAME.trigger +']');
    this.dds = document.querySelectorAll('['+ DATA_ATTR_NAME.contents +']');

    this.setElementsHeight();
    this.hideConntents();
    this.addEventListeners();
  }

  Accordion.prototype.setElementsHeight = function() {
    this.dds.forEach(function(element, index) {
      this.heighters[element.getAttribute(DATA_ATTR_NAME.contents)] = element.offsetHeight;
    }.bind(this));
  };

  Accordion.prototype.hideConntents = function() {
    this.dds.forEach(function(element, index) {
      element.style.height = 0;
    });
  };

  Accordion.prototype.trigger = function() {
    var target = event.currentTarget;
    var data = target.getAttribute(DATA_ATTR_NAME.trigger);
    this.toggle(data);
  };

  Accordion.prototype.toggle = function(data) {
    var target = document.querySelector('['+ DATA_ATTR_NAME.contents +'="'+ data +'"]');

    // １つだけ表示のフラグがtrueで、prev_elementがクリックしたコンテンツじゃなかったら、閉じる
    if (this.is_single && this.prev_element && this.prev_element !== target) {
      this.prev_element.style.height = 0;
      this.prev_element.classList.remove(CLASS_NAME.open);
    }

    // コンテンツの開閉
    if (target.classList.contains(CLASS_NAME.open)) {
      target.style.height = 0;
      target.classList.remove(CLASS_NAME.open);
    } else {
      target.style.height = this.heighters[data] + 'px';
      target.classList.add(CLASS_NAME.open);
    }

    this.prev_element = target; // 押したElementを格納しておく
  };

  Accordion.prototype.addEventListeners = function() {
    this.dts.forEach(function(element, index) {
      element.addEventListener('click', this.trigger.bind(this));
    }.bind(this));
  };

  window.addEventListener('DOMContentLoaded', function() {
    new Accordion({
      'is_single': false
    });
  });
})();