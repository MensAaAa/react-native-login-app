import { createSelector } from 'reselect';
import { GlobalStateAppType } from '../defaultState';

const DefaultUserSelector = (state: GlobalStateAppType) => state.user;

export const CurrentUserSelector = createSelector([DefaultUserSelector], userState => userState.currentUser);
export const AccessTokenSelector = createSelector([DefaultUserSelector], userState => userState.currentUser ? userState.currentUser.access_token : null);
export const IsFetchingSelector = createSelector([DefaultUserSelector], userState => userState.isFetching);
export const ErrorMessageSelector = createSelector([DefaultUserSelector], userState => userState.error);