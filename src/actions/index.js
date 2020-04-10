import { SIGN_IN, SIGN_OUT, INIT_USERS, INIT_QUESTIONS, UPDATE_ANSWER } from './types';
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

const updateAnswer = (uid, qid, answer)=>{
  return {
    type: UPDATE_ANSWER,
    uid,
    qid,
    answer
  }
}

export const updateAnswerAsync = (uid, qid, answer) => {
  return (dispatch, getState)=>{
    return API._saveQuestionAnswer({authedUser: uid, qid, answer}).then(()=>{
      dispatch(updateAnswer(uid, qid, answer))
    })

  }
}
