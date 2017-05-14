import React from 'react';
import style from './style.css';

const Trigger = props => (
  <li className={style['list-item']} onClick={props.handleClick}>tab{props.value}</li>
);

export default Trigger;
