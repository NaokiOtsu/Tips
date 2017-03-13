import React from 'react';
import { render } from 'react-dom';
import TodoModel from './todoModel';
import TodoFooter from './todoFooter';
import TodoItem from './todoItem';

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';
const ENTER_KEY = 13;

class TodoApp extends React.Component {
  getInitialState() {
    return {
      nowShowing: ALL_TODOS,
      editing: null,
      newTodo: ''
    };
  }
  
  componentDisMount() {
    const setState = this.setState;
    const router = Router({
      '/': setState.bind(this, {nowShowing: ALL_TODOS}),
      '/active': setState.bind(this, {nowShowing: ACTIVE_TODOS}),
      '/completed': setState.bind(this, {nowShowing: COMPLETED_TODOS})
    });
    router.init('/');
  }
  
  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }
  
  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) return;
    
    event.preventDefault();
    
    const val = this.state.newTodo.trim();
    
    if (val) {
      this.props.model.addTodo(val);
      this.setState({newTodo: ''});
    }
  }
  
  toggleAll(event) {
    const checked = event.target.checked;
    this.props.model.toggleAll(checked);
  }
  
  toggle(todoToToggle) {
    this.props.model.toggle(todoToToggle);
  }
  
  destroy(todo) {
    this.props.model.destroy(todo);
  }
  
  edit(todo) {
    this.setState({editing: todo.id});
  }
  
  save(todoToSave, text) {
    this.props.model.save(todoToSave, text);
    this.setState({editing: null});
  }
  
  cancel() {
    this.setState({editing: null});
  }
  
  clearCompleted() {
    this.props.model.clearCompleted();
  }
  
  render() {
    const footer;
    const main;
    const todos = this.props.model.todos;
    
    const shownTodos = todos.filter(function (todo) {
      switch (this.state.nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    }, this);
    
    const todoItems = shownTodos.map(function (todo) {
      return (
        <todoItem
          key={todo.id}
          todo={todo}
          onToggle={this.toggle.bind(this, todo)}
          onDestroy={this.destroy.bind(this, todo)}
          onEdit={this.edit.bind(this, todo)}
          editing={this.state.editing === todo.id}
          onSave={this.save.bind(this, todo)}
          onCancel={this.cancel}
        />
      );
    }, this);
    
    const activeTodoCount = todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);
    
    const completedCount = todos.length - activeTodoCount;
    
    if (activeTodoCount || completedCount) {
      footer = 
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={this.cleaCompleted}
        />;
    }
    
    if (todos.length) {
      main = (
        <section className="main">
          <input 
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleAll}
            checked={activeTodoCount === 0}
          />
          <ul className="todo-list">
            {todoItems}
          </ul>
        </section>
      );
    }
    
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input 
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onKeyDown={this.handleNewTodoKeyDown}
            onChange={this.handleChange}
            autoFocus={true}
          />
        </header>
        {main}
        {footer}
      </div>
    );
    
  }
}

const model = new TodoModel('react-todos');

function rendering() {
  render(
    <TodoApp model={model}/>,
    document.getElementById('app')
  );
}

model.subscribe(rendering);
rendering();