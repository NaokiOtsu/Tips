import React from 'react'

const ItemList = ({orange, meat, useOrange, useMeat, onOrangeClick, onMeatClick}) => (
  <div>
    <div>
      <button onClick={() => onOrangeClick()} style={useOrange? {}: {opacity: .5, pointerEvents: 'none'}}>orange</button>
      {orange.current}
    </div>
    <div>
      <button onClick={() => onMeatClick()} style={useMeat? {}: {opacity: .5, pointerEvents: 'none'}}>meat</button>
      {meat.current}
    </div>
  </div>
)

export default ItemList
