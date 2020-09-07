import { SET_USER, LOG_OUT } from '../actions/index';

const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case SET_USER: {
      const { user, loggedIn } = action.result;
      return {
        user,
        loggedIn,
      };
    }
    case LOG_OUT: {
      return {
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default user;
