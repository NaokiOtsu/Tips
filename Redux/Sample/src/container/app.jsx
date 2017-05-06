import React from 'react';
import { connect } from 'react-redux';

import App from '../component/app';
import { increment } from '../action/app';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { 
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
