import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware)
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}



// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({ action, result }) {
//     return result.json().then(data => {
//       return Promise.resolve({
//         action,
//         result: data,
//       });
//     });
//   },
// });

// const finalCreateStore = compose(
//   applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(hashHistory))
// )(createStore);

// const reducer = combineReducers(Object.assign({}, rootReducer, {
//   routing: routerReducer,
// }));

// export default function configureStore(initialState) {
//   const store = finalCreateStore(reducer, initialState);

//   return store;
// }