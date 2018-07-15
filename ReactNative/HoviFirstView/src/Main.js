import React from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import App from './App';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="PageA" initial component={App} title="App" />
    <Scene key="PageB" component={App} title="App" />
  </Scene>
);

class Main extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

export default Main;
