import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import article, { loadArticle } from '../components/Detail/ArticleRedux';

export default combineReducers({
  article,
});

export const actions = {
  loadArticle,
};

