import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    default:
      return state;
  }
}
