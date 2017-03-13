import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      list: state.home.list,
    };
  },
  { push, ...actions }
)(Home);
