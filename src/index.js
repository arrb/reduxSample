'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/app/App';
import EmployeeUI from './components/employeeUI/EmployeeUI';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={EmployeeUI}/>
  </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
