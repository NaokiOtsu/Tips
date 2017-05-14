import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Top from './components/top';
import Modal from './components/modal';
import Tabs from './components/tabs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show_modal: false
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Top} />
          <Route path="/modal" component={Modal} />
          <Route path="/tabs" component={Tabs} />

          <ul>
            <li><Link to="/">Top</Link></li>
          </ul>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
