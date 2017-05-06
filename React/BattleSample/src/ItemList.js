import React from 'react';
import style from './ItemList.css';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  canOrange() {
    if (!this.props.config.item_list.orange) return false;
    if (this.props.config.battle_power.current >= this.props.config.battle_power.max) return false;
    return true;
  }

  canMeat() {
    if (!this.props.config.item_list.meat) return false;
    if (this.props.config.battle_power.current >= this.props.config.battle_power.max) return false;
    return true;
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.onItemClick('orange')} className={this.canOrange()? '': 'disable'}>orange</button>
          {this.props.config.item_list.orange}
        </div>
        <div>
          <button onClick={() => this.props.onItemClick('meat')} className={this.canMeat()? '': 'disable'}>meat</button>
          {this.props.config.item_list.meat}
        </div>
      </div>
    );
  }
}

export default ItemList;