import { ADD_ERROR, REMOVE_ERRORS } from '../actions/index';

export default function errors(state = [], action) {
  switch (action.type) {
    case ADD_ERROR: {
      const { error } = action;
      const newState = [...state, error];

      return newState;
    }
    case REMOVE_ERRORS:
      return [];
    default:
      return [];
  }
}
