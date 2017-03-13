import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import DevTools from './DevTools';
import fetchMiddleware from './fetchMiddleware';

import rootReducer from './reducers';

// 添加中间件
const enhancedCreateStore = compose(
    applyMiddleware(thunk, fetchMiddleware, routerMiddleware(hashHistory)),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = enhancedCreateStore(rootReducer, initialState);
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