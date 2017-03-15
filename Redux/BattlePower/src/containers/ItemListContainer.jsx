import { connect } from 'react-redux'
import { useOrange, useMeat } from '../actions'
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
  let useOrange = true;
  if (!state.itemAndBattlePower.orange.current) useOrange = false;

  let useMeat = true;
  if (!state.itemAndBattlePower.meat.current) useMeat = false;
  
  if (state.itemAndBattlePower.battle_power.current >= state.itemAndBattlePower.battle_power.max) {
    useOrange = false;
    useMeat = false;
  }

  return ({
    orange: state.itemAndBattlePower.orange,
    meat: state.itemAndBattlePower.meat,
    useOrange,
    useMeat
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onOrangeClick: () => dispatch(useOrange()),
  onMeatClick: () => dispatch(useMeat())
})

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)

export default ItemListContainer
