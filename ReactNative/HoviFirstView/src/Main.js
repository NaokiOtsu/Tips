import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import Home from './containers/Home';
import Household from './containers/Household';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = createStore(reducers)

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" initial component={Home} title="マイページ" />
    <Scene key="Household" component={Household} title="家計簿" />
  </Scene>
);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    )
  }
}

export default Main;
