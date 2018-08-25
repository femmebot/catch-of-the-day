import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StorePicker from './StorePicker/StorePicker';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ StorePicker } />
      <Route path="/store/:storeId" component={ App } />
    </Switch>
  </BrowserRouter>
)

export default Router;
