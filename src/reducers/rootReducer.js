import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import loginErrorsReducer from './loginErrorsReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loginErrors: loginErrorsReducer,
});

export default rootReducer;
