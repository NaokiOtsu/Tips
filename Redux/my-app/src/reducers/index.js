import { combineReducers } from 'redux';

const initialState = {
  tasks: []
}

const taskReducer = (state = initialState, action) => {
  console.log(999, action)
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      }
    default:
      return state;
  }
}

export default combineReducers({
  taskReducer,
});

