import { connect } from 'react-redux';
import { useOrange, useMeat } from '../actions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  let canOrange = true;
  if (!state.itemAndBattlePower.orange.current) canOrange = false;

  let canMeat = true;
  if (!state.itemAndBattlePower.meat.current) canMeat = false;

  if (state.itemAndBattlePower.battle_power.current >= state.itemAndBattlePower.battle_power.max) {
    canOrange = false;
    canMeat = false;
  }

  return ({
    orange: state.itemAndBattlePower.orange,
    meat: state.itemAndBattlePower.meat,
    canOrange,
    canMeat,
  });
};

const mapDispatchToProps = dispatch => ({
  onOrangeClick: () => dispatch(useOrange()),
  onMeatClick: () => dispatch(useMeat()),
});

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemListContainer;
