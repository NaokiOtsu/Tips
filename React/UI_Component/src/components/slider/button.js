import React from 'react';

const Button = props => (
  <button onClick={() => props.handleClick()}>{props.name}</button>
);

export default Button;
