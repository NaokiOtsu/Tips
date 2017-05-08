import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'director/build/director';

import Config from './config';
import TodoFooter from './footer';
import TodoItem from './todoItem';
import TodoModel from './todoModel';

const ENTER_KEY = 13;

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      nowShowing: Config.ALL_TODOS,
      editing: null,
      newTodo: ''
    }
  }

  componentDidMount() {
    const setState = this.setState;
    const router = Router({
      '/': setState.bind(this, { nowShowing: Config.ALL_TODOS }),
      '/active': setState.bind(this, { nowShowing: Config.ACTIVE_TODOS }),
      '/completed': setState.bind(this, { nowShowing: Config.COMPLETED_TODOS })
    });
    router.init('/');
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) return;

    event.preventDefault();

    const val = this.state.newTodo.trim();
    if (val) {
      this.props.model.addTodo(val);
      this.setState({ newTodo: '' });
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
    this.setState({ editing: todo.id });
  }

  save(todoToSave, text) {
    this.props.model.save(todoToSave, text);
    this.setState({ editing: null });
  }

  cancel() {
    this.setState({ editing: null });
  }

  clearCompleted() {
    this.props.model.clearCompleted();
  }

  render() {
    let footer;
    let main;
    let todos = this.props.model.todos;

    let shownTodos = todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case Config.ACTIVE_TODOS:
          return !todo.completed;
        case Config.COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });

    let todoItems = shownTodos.map((todo) => {
      return (
        <TodoItem
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
    });

    let activeTodoCount = todos.reduce((accum, todo) => {
      return todo.completed ? accum : accum + 1;
    }, 0);

    let completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer =
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={this.clearCompleted}
        />;
    }

    if (todos.length) {
      main = (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleAll.bind(this)}
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
            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
            onChange={this.handleChange.bind(this)}
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

const render = () => {
  ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
};

model.subscribe(render);
render();
