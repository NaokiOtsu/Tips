import { connect } from 'react-redux'
import { selectBattlePower } from '../actions'
import BattlePowerList from '../components/BattlePowerList'

const mapStateToProps = (state) => {
  console.log(state)
  return ({
    current: state.itemAndBattlePower.battle_power.current,
    selected: state.itemAndBattlePower.battle_power.selected
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (i) => {
    dispatch(selectBattlePower(i))
  }
})

const BattlePowerContainer = connect(mapStateToProps, mapDispatchToProps)(BattlePowerList)

export default BattlePowerContainer
