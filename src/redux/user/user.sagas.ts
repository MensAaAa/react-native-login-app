import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as types from './user.constants';
import * as actions from './user.actions';
import * as api from '../../api';
import { UserInterface } from '../../types/User';

function* signInStart(data) {
  try {
    const response = yield call(api.loginUser, data['loginData']);
    if (response) {
      yield put(actions.OnSignInSuccessAction(response.data))
    }
  } catch (error) {
    yield put(actions.OnSignInFailedAction(error.response.data.error_description))
  }
}

function* refreshStart(refresh_token) {
  try {
    const response = yield call(api.refreshLogin, refresh_token)
    console.log(response)
    if (response) {
      yield put(actions.OnRefreshSuccessAction(response.data));
    }
  } catch (error) {
    console.log(error)
    yield put(actions.OnRefreshFailedAction());
  }
}

function* logoutUser() {
  yield put(actions.OnSignOutSuccessAction());
}

function* resetErrors() {
  yield put(actions.ResetErrorsSuccessAction());
}

function* onSignInStart() {
  yield takeLatest(types.ON_SIGN_IN_START as any, signInStart)
}

function* onSignOutStart() {
  yield takeLatest(types.ON_SIGN_OUT_START as any, logoutUser)
}

function* onResetErrors() {
  yield takeLatest(types.RESET_ERRORS_START as any, resetErrors);
}

function* onRefreshStart() {
  yield takeLatest(types.ON_REFRESH_START as any, refreshStart)
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
    call(onResetErrors),
    call(onRefreshStart)
  ])
}