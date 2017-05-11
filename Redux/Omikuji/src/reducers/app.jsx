
const initialState = {
  is_top_modal_open: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_TOP_TRIGGER_BTN':
      return Object.assign({}, state, {
        is_top_modal_open: !state.is_top_modal_open
      });
    default:
      return state;
  }
}

export default app;
