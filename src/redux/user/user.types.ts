import { LoginInterface } from '../../types/Login';
import { UserInterface } from '../../types/User';

export interface OnSignInStartInterface {
  type: 'ON_SIGN_IN_START',
  loginData: LoginInterface,
}

export interface OnSignInSuccessInterface {
  type: 'ON_SIGN_IN_SUCCESS',
  user: UserInterface,
}

export interface OnSignInFailedInterface {
  type: 'ON_SIGN_IN_FAILED',
  error: any,
}

export interface OnSignOutSuccessInterface {
  type: 'ON_SIGN_OUT_SUCCESS',
}

export interface OnSignOutStartInterface {
  type: 'ON_SIGN_OUT_START',
}

export interface ResetErrorsStartInterface {
  type: 'RESET_ERRORS_START',
}

export interface ResetErrorsSuccessInterface {
  type: 'RESET_ERRORS_SUCCESS',
}

export interface OnRefreshStartInterface {
  type: 'ON_REFRESH_START',
  refresh_token: string,
}

export interface OnRefreshSuccessInterface {
  type: 'ON_REFRESH_SUCCESS',
  user: UserInterface,
}

export interface OnRefreshFailedInterface {
  type: 'ON_REFRESH_FAILED',
}

export type UserActionTypes = OnSignInStartInterface 
| OnSignInSuccessInterface 
| OnSignInFailedInterface 
| OnSignOutSuccessInterface 
| ResetErrorsStartInterface
| ResetErrorsSuccessInterface
| OnRefreshFailedInterface
| OnRefreshStartInterface
| OnRefreshSuccessInterface;