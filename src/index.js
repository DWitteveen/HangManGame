import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/app';

const store = createStore(allReducers, window.devToolsExtension ? window.devToolsExtension() : (f) => f);


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,document.getElementById('root')
);

export default {}
