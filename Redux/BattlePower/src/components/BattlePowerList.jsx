import React, { PropTypes } from 'react';

const BattlePowerList = ({ current, selected, onClick }) => {
  const MAX = 5;
  const battlePowers = [];
  let counter = current;

  for (let i = 0; i < MAX; i += 1) {
    battlePowers.push(
      <li
        key={i}
        style={{
          color: (counter > 0) ? 'red' : '',
          pointerEvents: (counter > 0) ? '' : 'none',
          border: (i === selected) ? '1px solid #f00' : '',
          display: 'inline-block',
          marginRight: '10px',
          padding: '5px',
        }}
        role="button"
        onClick={() => onClick(i)}
      >
        {i + 1}
      </li>,
    );
    counter -= 1;
  }

  return (
    <ul>
      {battlePowers}
    </ul>
  );
};

BattlePowerList.propTypes = {
  current: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BattlePowerList;
