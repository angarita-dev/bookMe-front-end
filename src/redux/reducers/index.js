import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';

export default combineReducers({
  user,
  rooms,
});
