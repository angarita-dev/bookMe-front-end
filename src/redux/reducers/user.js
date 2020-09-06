import { SET_USER, LOG_OUT } from '../actions/index';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      const { user, token } = action.result;
      return {
        info: { ...user },
        token,
      };
    }
    case LOG_OUT: {
      return { };
    }
    default:
      return state;
  }
};

export default user;
