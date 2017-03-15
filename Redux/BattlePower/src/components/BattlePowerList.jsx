import React from 'react'

const BattlePowerList = ({current, selected, onClick}) => {
  const MAX = 5
  const battlePowers = []

  for (let i = 0; i < MAX; i++) {
    battlePowers.push(
      <li
        key={i}
        style={{
          color: (current > 0)? 'red' : '',
          pointerEvents: (current > 0)? '' : 'none',
          border: (i === selected)? '1px solid #f00' : '',
          display: 'inline-block',
          marginRight: '10px',
          padding: '5px'
        }}
        onClick={() => onClick(i)}
      >
        {i + 1}
      </li>
    )
    current--
  }

  return (
    <ul>
      {battlePowers}
    </ul>
  )
}

export default BattlePowerList
