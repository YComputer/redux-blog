import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import DevTools from './DevTools';

import rootReducer from './reducers';


const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware,FetchMiddleware,routerMiddleware(browserHistory)),
    DevTools.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}