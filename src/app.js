import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import routes from './routes';
// import DevTools from './redux/DevTools';

const store = configureStore();
console.log('=====store',store);
// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(hashHistory, store);
console.log('=====history',history);
console.log('routes',routes);

ReactDOM.render((
  <Provider store={store}>
      {routes(history)}
  </Provider>
), document.getElementById('root'));
