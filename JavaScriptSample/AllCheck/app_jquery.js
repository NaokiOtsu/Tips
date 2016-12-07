(function() {
  'use strict';

  var DATA_ATTR_NAME = {
    'all': 'data-checkbox-all',
    'child': 'data-checkbox-child'
  };

  function AllCheck() {
    this.$all = $('['+ DATA_ATTR_NAME.all +']');
    this.$child = $('['+ DATA_ATTR_NAME.child +']');

    this.is_all_check = false;

    this.bindEvents();
  };

  AllCheck.prototype.bindEvents = function() {
    this.$all.on('change', this.toggleAllCheck.bind(this));
    this.$child.on('change', this.childChange.bind(this));
  };

  AllCheck.prototype.childChange = function() {
    this.is_all_check = this.isChildAll();

    if (this.is_all_check) {
      this.allCheckOn();
    } else {
      this.allCheckOff();
    }
  };

  AllCheck.prototype.toggleAllCheck = function() {
    var $target = $(event.currentTarget);
    
    // チェックボックスのON/OFF
    if ($target.prop('checked')) {
      this.childAllCheckOn();
      this.allCheckOn();
      this.is_all_check = true;
    } else {
      this.childAllCheckOff();
      this.allCheckOff();
      this.is_all_check = false;
    }
  };
  
  // checkboxが全てチェックされているかどうか
  AllCheck.prototype.isChildAll = function() {
    var counter = 0;
    var length = this.$child.length;
    
    this.$child.each(function(index, element) {
      if ($(element).prop('checked')) counter++;
    });

    return (counter === length) ? true : false;
  };

  // allのチェックボックスを全てON
  AllCheck.prototype.allCheckOn = function() {
    this.$all.each(function(index, element) {
      $(element).prop('checked', true);
    });
  };

  // allのチェックボックスを全てOFF
  AllCheck.prototype.allCheckOff = function() {
    this.$all.each(function(index, element) {
      $(element).prop('checked', false);
    });
  };

  // childのチェックボックスを全てON
  AllCheck.prototype.childAllCheckOn = function() {
    this.$child.each(function(index, element) {
      $(element).prop('checked', true);
    });
  };

  // childのチェックボックスを全てOFF
  AllCheck.prototype.childAllCheckOff = function() {
    this.$child.each(function(index, element) {
      $(element).prop('checked', false);
    });
  };

  $(function() {
    new AllCheck();
  });
})();