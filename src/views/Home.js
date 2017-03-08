import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

class Home extends React.Component {
  render() {
    console.log('容器组件的state',this.props)
    // const { loadArticles, articleList, push } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props} />
      </div>
    );
  }
}

export default connect(
    state => {
        return {
            list: state.home.list
        }
    },
    dispatch => {
        return {
            push,
            ...actions,
        }
    }
)(Home);
