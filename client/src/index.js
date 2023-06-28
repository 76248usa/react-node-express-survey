//Redux side of project

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App'
import reducers from './reducers'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(() => reducers, {}, applyMiddleware(reduxThunk));

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <Provider store={store} >
 //   <App />
//  </Provider> 
//);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);


