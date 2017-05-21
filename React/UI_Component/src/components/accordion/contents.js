import React, { Component } from 'react';
import style from './style.css';

class Contents extends Component {
  componentDidMount() {
    this.props.contentsComponentDidMount(this.refs.contents.clientHeight);
  }

  render() {
    const height = this.props.height !== null ? `${this.props.height}px` : 'auto';

    return (
      <div ref="contents" className={style.contents} style={{ height: height }}>
        contents<br />
        contents<br />
        <img src="./sample.jpg" alt="画像" width="1140" height="642" />
      </div>
    );
  }
}

export default Contents;
