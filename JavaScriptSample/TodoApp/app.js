(function(window, undefined) {
  'use strict';
  
  function TodoApp() {
    this.input_text = document.getElementById('add-todo');
    this.btn        = document.getElementById('add-btn');
    this.list       = document.getElementById('list');
    this.remain     = document.getElementById('remain');
    
    this.bindEvents();
    this.updateCount();
  }
  
  TodoApp.prototype.bindEvents = function() {
    this.btn.addEventListener('click', this.addTodo.bind(this), false);
  };
  
  TodoApp.prototype.addTodo = function() {
    var value = this.input_text.value;
    if (value === '') return; // 空だったらreturn
    
    // 要素作成
    var li         = document.createElement('li');
    var edit_btn   = document.createElement('span');
    var delete_btn = document.createElement('span');
    var textNode   = document.createTextNode(value);
    
    // テキスト設定
    edit_btn.textContent   = ' [編集]';
    delete_btn.textContent = ' [X]';
    
    // イベント設定
    delete_btn.addEventListener('click', this.onDelete.bind(this));
    edit_btn.addEventListener('click',   this.onEdit.bind(this));
    
    // 要素追加
    li.appendChild(textNode);
    li.appendChild(edit_btn);
    li.appendChild(delete_btn);
    this.list.appendChild(li);
    
    this.updateCount();
  };
  
  TodoApp.prototype.onEdit = function() {
    var parent = event.currentTarget.parentNode;
    var text   = parent.firstChild.textContent;
    var input  = document.createElement('input');
    
    // 要素作成
    input.setAttribute('type', 'text');
    input.setAttribute('value', text);
    
    // イベント設定
    input.addEventListener('blur', function() {
      var value    = input.value;
      var textNode = document.createTextNode(value);
      
      parent.removeChild(input);
      parent.insertBefore(textNode, parent.firstElementChild);
    });
    
    // 要素入れ替え
    parent.replaceChild(input, parent.firstChild);
  };
  
  TodoApp.prototype.onDelete = function() {
    if (!window.confirm('削除しますか？')) return;
    
    var parent = event.currentTarget.parentNode;
    parent.parentNode.removeChild(parent);
    
    this.updateCount();
  };
  
  TodoApp.prototype.updateCount = function() {
    var length = this.list.children.length;
    this.remain.textContent = length;
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    new TodoApp();
  });
  
  window.TodoApp = TodoApp;
  module.exports = TodoApp;
  
})(window);