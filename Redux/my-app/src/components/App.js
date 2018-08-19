import React from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/css/App.css';

const App = ({ store, hoge }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React {console.log(hoge)}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
