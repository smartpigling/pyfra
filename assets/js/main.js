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
import { DatePicker } from 'antd';

ReactDOM.render(
    <div>
        <h1>Hello, world!sfdasdf递四方速递</h1>
        <DatePicker />
    </div>
    ,
  document.getElementById('root'),
);
