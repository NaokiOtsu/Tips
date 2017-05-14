import React, { Component } from 'react';
import Button from '../button';
import Contents from './contents';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      show_modal: false
    }
  }

  handleOpenClick() {
    this.setState({
      show_modal: true
    });
  }

  handleCloseClick() {
    this.setState({
      show_modal: false
    });
  }

  render() {
    return (
      <div>
        <Button handleClick={() => this.handleOpenClick()} />
        <Contents showModal={this.state.show_modal} handleCloseClick={() => this.handleCloseClick()} />
      </div>
    );
  }
}

export default Modal;
