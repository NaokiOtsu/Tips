Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'hoge1' },
      { id: 1, text: 'hoge2' },
      { id: 2, text: 'hoge3' }
    ]
  }
});
