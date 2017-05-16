import React, { Component } from 'react';
import Item from './item';
import Button from './button';
import style from './style.css';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      current: 0
    }
  }

  handlePrevClick() {
    console.log(111)
  }

  handleNextClick() {
    console.log(222)
  }

  render() {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(<Item key={i} index={i} />);
    }
    return (
      <div>
        <div className={style.container}>
          <ul className={style.list}>
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
