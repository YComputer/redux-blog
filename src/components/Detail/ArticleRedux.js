const initialState = {
  loading: true,
  error: false,
  article: {}
};

// constants action types
const LOAD_ARTICLE = 'LOAD_ARTICLE';
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR';

// action creators
export function loadArticle(params) {
  return {
    types: [LOAD_ARTICLE, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_ERROR],
    url: '/api/article.json',
    params: params,
  };
}

// reducers
export default function article(state = initialState, action) {  
  switch (action.type) {
    case LOAD_ARTICLE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        article: action.payload,
      };
    }

    case LOAD_ARTICLE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
