import React from 'react';
import style from './style.css';
import classNames from 'classnames';

const Item = props => {
  const itemClassNames = classNames(
    style.item
  );
  return (<li className={itemClassNames}>item {props.index}</li>);
};

export default Item;
