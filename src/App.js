import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// import { Provider } from 'react-redux';

// import initializeStore from './store';

import Home from './views/Home'

const hist = createBrowserHistory();
// const store = initializeStore();

function App() {
  return (
    // <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    // </Provider>
  );
};

export default App;