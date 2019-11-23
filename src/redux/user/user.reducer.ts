import * as types from './user.constants';
import { UserActionTypes } from './user.types';
import defaultState from '../defaultState';
import { UserInterface } from '../../types/User';

export interface UserReducerStateType {
  currentUser: UserInterface | null,
  error: any,
  isFetching: boolean,
}

export default (
  state: UserReducerStateType = defaultState.user,
  action: UserActionTypes
): UserReducerStateType => {
  switch (action.type) {
    case types.ON_REFRESH_START:
    case types.ON_SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
      }
    case types.ON_REFRESH_SUCCESS:
    case types.ON_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        isFetching: false,
        error: null,
      }
    case types.ON_SIGN_IN_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    case types.ON_REFRESH_FAILED:
    case types.ON_SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isFetching: false,
      }
    case types.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
}