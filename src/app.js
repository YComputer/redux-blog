import 'babel-polyfill';
// require('bootstrap')
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div className='container'>
      {routes(history)}
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
