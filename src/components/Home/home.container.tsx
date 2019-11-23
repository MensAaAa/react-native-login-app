import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavigationInjectedProps } from 'react-navigation';
import HomeComponent from './home.component';
import { AccessTokenSelector, IsFetchingSelector } from '../../redux/user/user.selectors';
import { OnSignOutStartAction } from '../../redux/user/user.actions';
import { HomeProps } from '../../types/Home';
import { Dispatch } from 'redux';

const HomeContainer = (props: HomeProps & NavigationInjectedProps<any>) => (
  <HomeComponent {...props} />
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(OnSignOutStartAction())
})

const mapStateToProps = createStructuredSelector({
  token: AccessTokenSelector,
  isFetching: IsFetchingSelector,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)