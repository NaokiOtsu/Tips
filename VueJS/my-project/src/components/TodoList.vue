<template>
  <section>
    <header>
      <input 
        type="text"
        :value="newTodo"
        @keyup.enter="addTodo"
      >
      <button @click="addTodo">add</button>
      <p>全{{todos.length}}件</p>
      <p>残り{{remaining}}件</p>
    </header>
    <ul>
      <li v-for="(todo, index) in filterTodos">
        <input type="checkbox" v-model="todo.completed">
        <span
          v-show="!todo.editing"
          @click="editText(todo)"
          :class="{ disabled: todo.completed }"
        >
          {{todo.text}}
          <button @click="editText(todo)">edit</button>
        </span>
        <input
          type="text"
          v-show="todo.editing"
          v-model="todo.text"
          @keyup.enter="keyUpEnter(todo)"
          @blur="todo.editing = false"
          v-todo-focus
        >
        <button v-show="todo.completed" @click="removeTodo(index)">✗</button>
      </li>
    </ul>
    <ul>
      <li><a href="#/all">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
  </section>
</template>

<script>
import todoStore from '../stores/todo'

export default {
  name: 'TodoList',
  created: function () {
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  },
  watch: {
    todos: {
      handler: function () {
        todoStore.save(this.todos)
      },
      deep: true
    }
  },
  computed: {
    todos: function () {
      return this.$store.state.todos
    },

    newTodo: function () {
      return this.$store.getters.newTodo
    },

    visibility: function () {
      return this.$store.state.visibility
    },

    filterTodos: function () {
      return this.$store.getters.filterTodos
    },

    remaining: function () {
      return this.$store.getters.remaining
    }
  },
  methods: {
    addTodo: function () {
      console.log(this.newTodo)
      if (this.newTodo === '') return
      this.$store.commit('addTodo', this.newTodo)
    },

    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },

    editText: function (todo) {
      todo.editing = true
    },

    keyUpEnter: function (todo) {
      todo.editing = false
    },

    onHashChange: function () {
      this.$store.commit('onHashChange')
    }
  },

  directives: {
    'todo-focus': function (el, binding) {
      el.focus()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.disabled {
  text-decoration: line-through;
}
</style>
