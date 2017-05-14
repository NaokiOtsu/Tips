import React, { Component } from 'react';
import Trigger from './trigger';
import Contents from './contents';
import style from './style.css';

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      current: 1
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  render() {
    return (
      <div>
        <ul className={style.list}>
          <Trigger value={1} handleClick={() => this.handleClick(1)} />
          <Trigger value={2} handleClick={() => this.handleClick(2)} />
          <Trigger value={3} handleClick={() => this.handleClick(3)} />
        </ul>
        <div>
          <Contents value={1} current={this.state.current} />
          <Contents value={2} current={this.state.current} />
          <Contents value={3} current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default Tabs;
