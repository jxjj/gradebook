import * as types from '../constants/types';
import { loginWithPassword } from '../api/mockUserApi';

function createLoginSuccessAction(user) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    user,
  };
}

function createLoginFailureAction(errorMessage) {
  return {
    type: types.LOGIN_USER_FAILURE,
    error: errorMessage,
  };
}

export const loginUser = ({ email, password }) => dispatch => (
  loginWithPassword(email, password)
    .then((user) => {
      if (user) {
        dispatch(createLoginSuccessAction(user));
      } else {
        dispatch(createLoginFailureAction('email or password invalid'));
      }
    })
    .catch(err => dispatch(createLoginFailureAction(err.message)))
);
