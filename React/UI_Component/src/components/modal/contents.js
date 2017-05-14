import React, { Component } from 'react';
import Button from '../button';
import classNames from 'classnames';
import style from './style.css';

const Contents = props => {
  const containerClassNames = classNames(
    style.container,
    {
      [style.active]: props.showModal
    }
  );

  return (
    <div className={containerClassNames} onClick={() => props.handleCloseClick()}>
      <div className={style.inner} onClick={event => event.stopPropagation()}>
        <Button handleClick={() => props.handleCloseClick()} />
        contents
      </div>
    </div>
  );
};

export default Contents;
