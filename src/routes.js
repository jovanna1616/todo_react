import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App'
// import LoginForm from './components/LoginForm'
import LoginPage from './LoginPage'


export const HOMEPAGE = '/';
export const LOGIN = '/login';

export default (
  <Router>
    <div>
      <Switch>
        <Route exact path={HOMEPAGE} component={App}></Route>
        <Route exact path={LOGIN} component={LoginPage}></Route>
      </Switch>
    </div>
  </Router>
);
