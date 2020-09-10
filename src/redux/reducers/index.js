import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';
import errors from './errors';
import reservations from './reservations';

export default combineReducers({
  user,
  rooms,
  errors,
  reservations,
});
