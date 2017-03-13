import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from '../views/HomeRedux';
import detail from '../views/DetailRedux';
// 这个 routerReducer 貌似没有什么用。

export default combineReducers({
    home,
    detail,
    routing: routerReducer,
});
