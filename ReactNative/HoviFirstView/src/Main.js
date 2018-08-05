import React from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import Home from './Home';
import Household from './Household';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" initial component={Home} title="マイページ" />
    <Scene key="Household" component={Household} title="家計簿" />
  </Scene>
);

class Main extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

export default Main;
