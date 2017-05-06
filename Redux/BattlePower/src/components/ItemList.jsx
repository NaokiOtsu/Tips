import React, { PropTypes } from 'react';

const ItemList = ({ orange, meat, canOrange, canMeat, onOrangeClick, onMeatClick }) => (
  <div>
    <div>
      <button onClick={() => onOrangeClick()} style={canOrange ? {} : { opacity: 0.5, pointerEvents: 'none' }}>orange</button>
      {orange.current}
    </div>
    <div>
      <button onClick={() => onMeatClick()} style={canMeat ? {} : { opacity: 0.5, pointerEvents: 'none' }}>meat</button>
      {meat.current}
    </div>
  </div>
);

ItemList.propTypes = {
  orange: PropTypes.shape({
    current: PropTypes.number.isRequired,
  }).isRequired,
  meat: PropTypes.shape({
    current: PropTypes.number.isRequired,
  }).isRequired,
  canOrange: PropTypes.bool.isRequired,
  canMeat: PropTypes.bool.isRequired,
  onOrangeClick: PropTypes.func.isRequired,
  onMeatClick: PropTypes.func.isRequired,
};

export default ItemList;
