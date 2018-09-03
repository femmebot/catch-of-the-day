import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StorePicker from './StorePicker/StorePicker';
import App from './App';
import NotFound from "./NotFound";


const Router = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ StorePicker } />
      <Route path="/store/:storeID" component={ App } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default Router;
