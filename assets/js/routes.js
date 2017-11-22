import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {DatePicker} from 'antd';
import App from './containers/App';



export default (
  <Router>
    <Route exact path="/" component={App}>
    </Route>
  </Router>
);


