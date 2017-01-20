var assert = require('assert');
var TodoApp = require('../app.js');

var todo;

describe('TodoAppのテスト', function() {
  beforeEach(function() {
    document.body.innerHTML = __html__['test/todo-app.html'];
    todo = new TodoApp()
  });
  
  it('listにTodoを追加出来る', function() {
    assert.equal(document.getElementById('list').children.length, 0, '最初のlistは0件');
    
    document.getElementById('add-todo').value = 'hoge';
    todo.addTodo();
    assert.equal(document.getElementById('list').children.length, 1, 'addTodoしたらlistは1件');
    
    todo.updateCount();
    assert.equal(document.getElementById('remain').textContent, '1', 'updateCountして残り回数が1になる');
  });
});
