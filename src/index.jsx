import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the top-level BrowserRouter component
// import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';

import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
