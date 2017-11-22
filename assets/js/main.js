/*
 * Main Javascript file for pyfra.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
// require('jquery');
// require('font-awesome-webpack');
// require('bootstrap');

// // Your own code
// require('./plugins.js');
// require('./script.js');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRoutes from './routes';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {AppRoutes}
  </Provider>,
  document.getElementById('root')
);

