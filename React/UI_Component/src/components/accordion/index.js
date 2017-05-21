import React from 'react';
import Container from './container';

const list = [];
for (let i = 0; i < 10; i++) {
  list.push(<Container key={i} />);
}

const Accordion = () => (
  <ul>
    {list}
  </ul>
);

export default Accordion;
