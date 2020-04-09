import { SIGN_IN, SIGN_OUT, INIT_USERS } from './types';
import * as API from '../service/_DATA';

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

const initUsers = (users) => ({
  type: INIT_USERS,
  users,
});
//ASYNC REDUX THUNK
export const initUsersAsync = () => {
  return (dispatch, getState) => {
    return API._getUsers().then((users) => {
      dispatch(initUsers(users));
    });
  };
};
