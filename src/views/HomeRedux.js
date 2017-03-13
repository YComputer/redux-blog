import { combineReducers } from 'redux';

// 目前看这里的redux相关，和PreviewListRedux一样。显得这个HomeRedux好想多余。
// 那是因为目前Home比较简单包含的展现组件只有一个。后期项目复杂以后，这里可能包含多个components里面的Redux相关文件。
// 第二点就是，在这里可以有机会做第二次相关数据的整理。
// 引入 reducer 及 actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux';

// 这里需要注意的的是，这个属性，list，是HomeRedux这个object下的一个属性，这个object的名称最终是在/redux/reducers.js再次命名的。
// 所以在/views/Home.js当中引用时首先要用的是在/redux/reducers.js起的名称然后再使用.list来引用。
export default combineReducers({
  list,
});

export const actions = {
  loadArticles,
};

