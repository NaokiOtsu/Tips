import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => (
  <ul>
    <li><Link to="/modal">Modal</Link></li>
    <li><Link to="/tabs">Tabs</Link></li>
    <li><Link to="/slider">Slider</Link></li>
  </ul>
);

export default Top;
