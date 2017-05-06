import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Hoge from './Hoge';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Hoge />
  </MuiThemeProvider>,
  document.getElementById('app')
);
