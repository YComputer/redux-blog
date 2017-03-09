import PreviewReducer, { LOAD_ARTICLES_SUCCESS } from '../src/components/Home/PreviewListRedux';
import expect from 'expect.js';

describe('Home', () => {
  it('PreviewReducer should propagate articles when loaded', () => {
    const articles = [{
      title: '测试内容1'
    }, {
      title: '测试内容2'
    }];

    // 测试会失败，没有把action中的payload返回到result中，原因还没有搞清楚。
    const result = PreviewReducer({
            loading: true,
            error: false,
            articleList: []
        },{
            type: LOAD_ARTICLES_SUCCESS,
            payload: articles
        }
    );
    expect(result.articleList).to.equal(articles);
  });
});

// describe(' Preview List Reducer',() => {
//      it(' should propagate new articles when loaded', () => { 
//          const data = [{ id: 1, title: 'test'}]; 
//          const result = previewList(data,{ type: LOAD_ARTICLES_SUCCESS, payload: data, }); 
//          console.log('======',result);
//          expect(result).to.equal(data); }); });

