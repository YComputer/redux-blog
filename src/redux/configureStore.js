import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import DevTools from './DevTools';
import fetchMiddleware from './fetchMiddleware';

import rootReducer from './reducers';

const enhancedCreateStore = compose(
    applyMiddleware(thunkMiddleware, fetchMiddleware, routerMiddleware(hashHistory)),
    DevTools.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = enhancedCreateStore(reducer, initialState);
  return store;
}

// configureStore 的另外一种写法。
// const configureStore = () => {
//     const middlewares = [thunk];
//     if (process.env.NODE_ENV === 'development') {
//         middlewares.push(createLogger());
//     }
//     return createStore(
//         rootReducer,
//         compose(
//             applyMiddleware(...middlewares),
//             window.devToolsExtension ? window.devToolsExtension() : f => f
//         )
//     );
// };