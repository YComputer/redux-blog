import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/Detail/Article';
import { actions } from './DetailRedux';
import { push } from 'react-router-redux';


class Detail extends React.Component {
  render() {
    return (
      <div>
        <h1>Detail</h1>
        <Article {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      article: state.detail.article,
    };
  },
  { push, ...actions }
)(Detail);
