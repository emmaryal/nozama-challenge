import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'



ReactDOM.render(
  <Provider store = {createStore(reducers)}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


