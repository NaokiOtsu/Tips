import React, { Component } from 'react';
import classNames from 'classnames';
import style from './style.css';

class ToolTip extends Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  handleMouseEnter() {
    this.setState({
      active: true
    });
  }

  handleMouseLeave() {
    this.setState({
      active: false
    });
  }

  render() {

    const tooltipClassNames = classNames(
      style.tooltip,
      {
        [style.active]: this.state.active
      }
    );

    return (
      <div 
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        className={style.container}
      >
        tooltip
        <span className={tooltipClassNames}>hogee</span>
      </div>
    );
  }
}

export default ToolTip;
