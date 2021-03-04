import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import CarVerify from './pages/CarVerify';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/carverify" component={CarVerify} />
    <Route path="/" exact component={Home} />
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
