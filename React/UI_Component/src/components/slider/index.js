import React, { Component } from 'react';
import Item from './item';
import Button from './button';
import style from './style.css';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      max: 5
    }
  }

  handlePrevClick() {
    let current = this.state.current;
    if (current <= 0) current = this.state.max;

    this.setState({
      ...this.state,
      current: current - 1
    });
  }

  handleNextClick() {
    let current = this.state.current;
    if (current >= this.state.max - 1) current = -1;

    this.setState({
      ...this.state,
      current: current + 1
    });
  }

  render() {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(<Item key={i} index={i} />);
    }

    const listStyle = {
      'transform': `translateX(-${this.state.current * 300}px)`
    };

    return (
      <div>
        <div className={style.container}>
          <ul className={style.list} style={listStyle}>
            {items}
          </ul>
        </div>
        <Button name="prev" handleClick={() => this.handlePrevClick()} />
        <Button name="next" handleClick={() => this.handleNextClick()} />
      </div>
    );
  }
}

export default Slider;
