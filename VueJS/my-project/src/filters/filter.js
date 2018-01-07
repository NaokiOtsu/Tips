export default {
  all: todos => {
    return todos
  },

  active: todos => {
    return todos.filter(todo => !todo.completed)
  },

  completed: todos => {
    return todos.filter(todo => todo.completed)
  }
}
