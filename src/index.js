import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Switch, Route } from 'react-router'
import { store, history } from './redux/root.reducer'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
