import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { HOMEPAGE, LOGIN } from './routes';


const routing = (
    <Router>
      <div>
        <Route path={HOMEPAGE} component={App} />
        <Route path={LOGIN} component={LoginForm} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();