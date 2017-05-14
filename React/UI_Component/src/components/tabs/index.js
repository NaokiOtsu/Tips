import React, { Component } from 'react';
import Trigger from './trigger';

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      current: 1
    }
  }

  render() {
    return (
      <div>
        <ul>
          <Trigger />
          <Trigger />
          <Trigger />
        </ul>
      </div>
    );
  }
}

export default Tabs;
