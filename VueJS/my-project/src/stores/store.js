import Vue from 'vue'
import Vuex from 'vuex'
import todoStore from './todo'
import filters from '../filters/filter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: todoStore.fetch(),
    newTodo: '',
    visibility: 'all'
  },
  getters: {
    newTodo: state => {
      return state.newTodo
    },
    filterTodos: state => {
      return filters[state.visibility](state.todos)
    },
    remaining: state => {
      return filters.active(state.todos).length
    }
  },
  mutations: {
    addTodo: (state, payload) => {
      state.todos.push({
        text: payload,
        completed: false,
        editing: false
      })
      state.newTodo = ''
    },
    onHashChange: (state, payload) => {
      const visibility = window.location.hash.replace(/#\/?/, '')
      if (filters[visibility]) {
        state.visibility = visibility
      } else {
        window.location.hash = ''
        state.visibility = 'all'
      }
    }
  }
})
