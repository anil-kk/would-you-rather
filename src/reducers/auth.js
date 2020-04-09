import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    default:
      return state;
  }
}
