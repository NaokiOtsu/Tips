import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { addTask } from './actions';
import './assets/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);
store.dispatch(addTask('hoge'));
console.log(111, store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
