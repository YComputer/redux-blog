import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Login from '../views/Login';


const routes = (history) => (
  <Router history={history}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>
);

export default routes;

