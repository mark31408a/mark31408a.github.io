import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import APP from './app'
ReactDOM.render(
  <HashRouter basename='/'>
  <BrowserRouter>
    <Switch>
      <APP />
    </Switch>
  </BrowserRouter>
  </HashRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
