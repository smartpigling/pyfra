import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExamplePage from './routes/ExamplePage';


const RouterConfig = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <Link to='/example'>Example</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/example" component={ExamplePage}/>
      </Switch>
    </div>
  </Router>
)



export default RouterConfig;
