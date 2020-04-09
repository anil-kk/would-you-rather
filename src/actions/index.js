import { SIGN_IN, SIGN_OUT, INIT_USERS, INIT_QUESTIONS } from './types';
import * as API from '../service/_DATA';

export const signIn = (user) => ({
  type: SIGN_IN,
  user
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

const initQuestions = (questions) => ({
  type: INIT_QUESTIONS,
  questions,
});

export const initQuestionsAsync = () => {
  return (dispatch, getState) => {
    return API._getQuestions().then((questions) =>
      dispatch(initQuestions(questions))
    );
  };
};
