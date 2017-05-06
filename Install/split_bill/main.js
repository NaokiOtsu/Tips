(function() {
  'use strict';

  var PRICE_UNIT = 100;

  var price  = document.getElementById('price');
  var num    = document.getElementById('num');
  var btn    = document.getElementById('btn');
  var result = document.getElementById('result');

  function initialize() {
    addEventListeners();
  }

  function addEventListeners() {
    btn.addEventListener('click', onClick);
    price.addEventListener('click', selectValue);
    num.addEventListener('click', selectValue);
  }

  function onClick() {
    var price_value = price.value;
    var num_value = num.value;
    
    if (! /^[1-9][0-9]*$/.test(price_value) || ! /^[1-9][0-9]*$/.test(num_value)) return result.innerHTML = '正しい数値を入力してください。';
    
    if (price_value % num_value === 0) {
      // 割り切れる時
      result.innerHTML = '一人' + (price_value / num_value) + '円です。';
    } else {
      // 割り切れない時
      var price_per_person_under = Math.floor(price_value / num_value / PRICE_UNIT) * PRICE_UNIT;
      var price_per_person_over = Math.ceil(price_value / num_value / PRICE_UNIT) * PRICE_UNIT;
      var diff_price_under = price_value - (price_per_person_under * num_value);
      var diff_price_over = price_value - (price_per_person_over * num_value);

      result.innerHTML = 
        '一人'+ price_per_person_under +'円だと'+ diff_price_under +'円足りません。<br>' + 
        '一人'+ price_per_person_over +'円だと'+ Math.abs(diff_price_over) +'円余ります。';
    }
  }

  function selectValue() {
    this.select();
  }

  window.addEventListener('DOMContentLoaded', function() {
    initialize();
  });
})();