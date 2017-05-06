(function() {
  'use strict';

  var DATA_ATTR_NAME = {
    'all': 'data-checkbox-all',
    'child': 'data-checkbox-child'
  };

  function AllCheck() {
    this.all = document.querySelectorAll('['+ DATA_ATTR_NAME.all +']');
    this.child = document.querySelectorAll('['+ DATA_ATTR_NAME.child +']');

    this.is_all_check = false;

    this.bindEvents();
  };

  AllCheck.prototype.bindEvents = function() {
    this.all.forEach(function(element) {
      element.addEventListener('change', this.toggleAllCheck.bind(this));
    }.bind(this));
    this.child.forEach(function(element) {
      element.addEventListener('change', this.childChange.bind(this));
    }.bind(this));
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
    var target = event.currentTarget;
    
    // チェックボックスのON/OFF
    if (target.checked) {
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
    var length = this.child.length;
    
    this.child.forEach(function(element) {
      if (element.checked) counter++; 
    });

    return (counter === length) ? true : false;
  };

  // allのチェックボックスを全てON
  AllCheck.prototype.allCheckOn = function() {
    this.all.forEach(function(element) {
      element.checked = true;
    });
  };

  // allのチェックボックスを全てOFF
  AllCheck.prototype.allCheckOff = function() {
    this.all.forEach(function(element) {
      element.checked = false;
    });
  };

  // childのチェックボックスを全てON
  AllCheck.prototype.childAllCheckOn = function() {
    this.child.forEach(function(element) {
      element.checked = true;
    });
  };

  // childのチェックボックスを全てOFF
  AllCheck.prototype.childAllCheckOff = function() {
    this.child.forEach(function(element) {
      element.checked = false;
    });
  };

  window.addEventListener('DOMContentLoaded', function() {
    new AllCheck();
  });
})();