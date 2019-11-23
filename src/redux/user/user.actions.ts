import * as types from './user.constants';
import {
  OnSignInSuccessInterface, OnSignInFailedInterface,
  OnSignInStartInterface, OnSignOutSuccessInterface,
  OnSignOutStartInterface, ResetErrorsStartInterface, ResetErrorsSuccessInterface, OnRefreshStartInterface, OnRefreshSuccessInterface, OnRefreshFailedInterface
} from './user.types';
import { LoginInterface } from '../../types/Login';
import { UserInterface } from '../../types/User';

export const OnSignInStartAction = (loginData: LoginInterface): OnSignInStartInterface => ({
  type: types.ON_SIGN_IN_START,
  loginData,
})

export const OnSignInSuccessAction = (user: UserInterface): OnSignInSuccessInterface => ({
  type: types.ON_SIGN_IN_SUCCESS,
  user,
})

export const OnSignInFailedAction = (error: any): OnSignInFailedInterface => ({
  type: types.ON_SIGN_IN_FAILED,
  error,
})

export const OnSignOutStartAction = (): OnSignOutStartInterface => ({
  type: types.ON_SIGN_OUT_START,
})

export const OnSignOutSuccessAction = (): OnSignOutSuccessInterface => ({
  type: types.ON_SIGN_OUT_SUCCESS,
})

export const ResetErrorsStartAction = (): ResetErrorsStartInterface => ({
  type: types.RESET_ERRORS_START,
})

export const ResetErrorsSuccessAction = (): ResetErrorsSuccessInterface => ({
  type: types.RESET_ERRORS_SUCCESS,
})

export const OnRefreshStartAction = (refresh_token: string): OnRefreshStartInterface => ({
  type: types.ON_REFRESH_START,
  refresh_token,
})

export const OnRefreshSuccessAction = (user: UserInterface): OnRefreshSuccessInterface => ({
  type: types.ON_REFRESH_SUCCESS,
  user,
})

export const OnRefreshFailedAction = (): OnRefreshFailedInterface => ({
  type: types.ON_REFRESH_FAILED,
})