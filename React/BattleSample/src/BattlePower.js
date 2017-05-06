import React from 'react';
import style from './BattlePower.css';

class BattlePower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 0}
  }

  getButtonClassName(i, counter) {
    let className = '';
    if (counter > 0) className += 'active';
    if (this.props.config.battle_power.current && i === this.state.current) className += ' selected';
    return className;
  }

  onClick(i) {
    if (i >= this.props.config.battle_power.current) return;
    this.setState({current: i});
  }

  render() {
    let battle_powers = [];
    let counter = this.props.config.battle_power.current;

    for (var i = 0; i < this.props.config.battle_power.max; i++) {
      battle_powers[i] = <li key={i} className={this.getButtonClassName(i, counter)} onClick={this.onClick.bind(this, i)}>{i}</li>;
      counter--;
    }

    return (
      <ul className="battle-power-container">
        {battle_powers}
      </ul>
    );
  }
}

export default BattlePower;