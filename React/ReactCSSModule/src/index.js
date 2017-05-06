import React from 'react';
import { render } from 'react-dom';

import styles from './index.css';

class App extends React.Component {
  render() {
    return (
      <h1 className={styles.hoge}>hello</h1>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
