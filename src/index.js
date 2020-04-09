import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import appStore from './store';

ReactDOM.render(
  <Provider store={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
