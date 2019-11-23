import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { NavigationInjectedProps } from 'react-navigation';
import * as actions from '../../redux/user/user.actions';
import { LoginInterface, LoginProps } from '../../types/Login';
import LoginComponent from './login.component';
import withAuth from '../shared/HOC/withAuth';
import { IsFetchingSelector, ErrorMessageSelector } from '../../redux/user/user.selectors';

class LoginContainer extends React.PureComponent<LoginProps & NavigationInjectedProps<any>> { 
  componentDidUpdate() {
    const { errorMessage, resetErrors } = this.props;
    if (errorMessage) {
      Alert.alert('Login failed', errorMessage, [
        {
          text: 'OK',
          onPress: () => resetErrors(),
        }
      ])
    }
  }
  render() {
    return (
      <LoginComponent {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (loginData: LoginInterface) => {
    dispatch(actions.OnSignInStartAction(loginData))
  },
  resetErrors: () => dispatch(actions.ResetErrorsStartAction())
})

const mapStateToProps = createStructuredSelector({
  isFetching: IsFetchingSelector,
  errorMessage: ErrorMessageSelector,
})

const withAuthContainer = withAuth(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withAuthContainer);