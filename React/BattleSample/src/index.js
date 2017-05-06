import React from 'react';
import { render } from 'react-dom';

import BattlePower from './BattlePower.js';
import ItemList from './ItemList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleItemClick(name) {
    const battle_power = this.state.config.battle_power;
    if (battle_power.current >= battle_power.max) return;

    var newState = Object.assign({}, this.state);
    if (name === 'orange') {
      newState = this.getUseOrangeState(newState);
    } else if (name === 'meat') {
      newState = this.getUseMeatState(newState);
    }
    
    this.setState(newState);
  }

  getUseOrangeState(newState) {
    newState.config.battle_power.current++;
    newState.config.item_list.orange--;
    return newState;
  }

  getUseMeatState(newState) {
    newState.config.battle_power.current = newState.config.battle_power.max;
    newState.config.item_list.meat--;
    return newState;
  }

  handleBattlePowerClick() {
    console.log(11)
  }

  render() {
    return (
      <div>
        <BattlePower config={this.state.config} />
        <ItemList config={this.state.config} onItemClick={(name) => this.handleItemClick(name)} />
      </div>
    );
  }
}

render(
  <App config={window.config} />,
  document.getElementById('app')
);
