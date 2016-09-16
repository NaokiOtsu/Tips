(function() {
  'use strict';

  var table = document.querySelector('.table tbody');
  var result = '';
  
  for (var i = 0; i < TABLE.length; i++) {
    result += createTable(TABLE[i]);
  }

  function createTable(obj) {
    var html = 
      '<tr>' + 
        '<td>'+ obj.id +'</td>' + 
        '<td>'+ obj.name +'</td>' + 
        '<td>'+ obj.img +'</td>' + 
      '<tr>';
    return html;
  }

  table.innerHTML = result;
  // table.innerHTML = JSON.stringify(result);
})();