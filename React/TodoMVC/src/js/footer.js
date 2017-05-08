import React from 'react';
import classNames from 'classnames';

import Utils from './utils';
import Config from './config';

class TodoFooter extends React.Component {
  render() {
    const activeTodoWord = Utils.pluralize(this.props.count, 'item');
    let clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
            Clear completed
        </button>
      );
    }

    const nowShowing = this.props.nowShowing;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({ selected: nowShowing === Config.ALL_TODOS})}>
                ALL
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={classNames({ selected: nowShowing === Config.ACTIVE_TODOS})}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={classNames({ selected: nowShowing === Config.COMPLETED_TODOS})}>
                Completed
            </a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
}

export default TodoFooter;
