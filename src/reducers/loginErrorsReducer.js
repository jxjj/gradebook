import * as types from '../constants/types';

export default function (state = [], action) {
  switch (action.type) {
    case (types.LOGIN_USER_FAILURE):
      return [
        ...state,
        action.error,
      ];
    default:
      return state;
  }
}
