import React from 'react';
import classNames from 'classnames';
import style from './style.css';

const Contents = props => {
  const contentsClassNames = classNames(
    style.contents,
    {
      [style.active]: props.current === props.value
    }
  );

  return (
    <div className={contentsClassNames}>
      contents{props.value}
    </div>
  );
};

export default Contents;
