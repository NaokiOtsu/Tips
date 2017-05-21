import React, { Component } from 'react';
import Title from './title';
import Contents from './contents';

class Container extends Component {
  constructor() {
    super();
    
    this.height = null;
    this.state = {
      opened: false,
      height: this.height
    };
  }

  handleClick() {
    this.setState({
      opened: !this.state.opened,
      height: !this.state.opened ? this.height : 0
    });
  }

  contentsComponentDidMount(height) {
    this.height = height;
    this.setContentsHeight(0);
  }

  setContentsHeight(height) {
    this.setState({
      height: height
    });
  }

  render() {
    return (
      <div>
        <Title handleClick={() => this.handleClick()} />
        <Contents opened={this.state.opened} height={this.state.height} contentsComponentDidMount={height => this.contentsComponentDidMount(height)} />
      </div>
    );
  }
}

export default Container;
