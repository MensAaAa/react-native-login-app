import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CurrentUserSelector } from '../../../redux/user/user.selectors';
import { Dispatch } from 'redux';
import * as actions from '../../../redux/user/user.actions';

const withAuth = (Component) => {
  class WrappedComponent extends React.PureComponent<any, {}> {
    componentDidMount() {
      const { currentUser,refreshUser } = this.props;
      if (currentUser) {
        refreshUser(currentUser.refresh_token);
      }
    }

    componentDidUpdate() {
      const { currentUser, navigation } = this.props;
      if (currentUser) {
        navigation.navigate('Home');
        return;
      }
      navigation.navigate('Login')
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    refreshUser: (refresh_token) => dispatch(actions.OnRefreshStartAction(refresh_token))
  })

  const mapStateToProps = createStructuredSelector({
    currentUser: CurrentUserSelector,
  })

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}

export default withAuth;