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
    const triggers = [];
    const contents = [];
    for (let i = 1; i <= 3; i++) {
      triggers.push(<Trigger key={i} value={i} handleClick={() => this.handleClick(i)} />);
      contents.push(<Contents key={i} value={i} current={this.state.current} />)
    }
    
    return (
      <div>
        <ul className={style.list}>
          {triggers}
        </ul>
        <div>
          {contents}
        </div>
      </div>
    );
  }
}

export default Tabs;
