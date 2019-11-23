import { UserReducerStateType } from './user/user.reducer'

export interface GlobalStateAppType {
  user: UserReducerStateType,
}

export default {
  user: {
    currentUser: null,
    error: null,
    isFetching: false,
  }
}
