import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import DevTools from './DevTools';

import rootReducer from './reducers';


const FetchMiddleware = createFetchMiddleware();

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware,FetchMiddleware),
    DevTools.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

// const reducer = combineReducers(Object.assign({}, rootReducer, {
//   routing: routerReducer,
// }));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}