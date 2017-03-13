import React from 'react';

class TodoFooter extends React.Component {
  render() {
    const activeTodoWord = Utils.pluralize(this.props.count, 'item');
    const clearButton = null;
    
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
        {this.props.count}: {activeTodoWord} left
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({selected: nowShowing === ALL_TODOS})}>
              All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={classNames({selected: nowShowing === ACTIVE_TODOS})}>
              Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={classNames({selected: nowShowing === COMPLETED_TODOS})}>
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