const initialState = {
  orange: {
    current: 10
  },
  meat: {
    current: 10
  },
  battle_power: {
    current: 3,
    max: 5,
    selected: 0
  }
}

const itemAndBattlePower = (state = initialState, action) => {
  switch(action.type) {
    case 'USE_ORANGE':
      return Object.assign({}, state, {
        orange: {
          current: state.orange.current - 1
        },
        battle_power: {
          current: state.battle_power.current + 1,
          max: state.battle_power.max,
          selected: state.battle_power.selected
        }
      })
    case 'USE_MEAT':
      return Object.assign({}, state, {
        meat: {
          current: state.meat.current - 1
        },
        battle_power: {
          current: state.battle_power.max,
          max: state.battle_power.max,
          selected: state.battle_power.selected
        }
      })
    case 'SELECT_BATTLE_POWER':
      return Object.assign({}, state, {
        battle_power: {
          current: state.battle_power.current,
          max: state.battle_power.max,
          selected: action.id
        }
      })
    default:
      return state
  }
}

export default itemAndBattlePower
