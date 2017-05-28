import * as types from '../constants/types';

const initialState = null;

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_ATTEMPT:
      return action.user;
    case types.LOGIN_USER_SUCCESS:
      return action.user;
    default: return state;
  }
}
