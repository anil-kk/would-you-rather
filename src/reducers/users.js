import { INIT_USERS, UPDATE_ANSWER, ADD_QUESTION } from '../actions/types';

const users = (state = [], action) => {
  switch (action.type) {
    case INIT_USERS:
      const { users } = action;
      let updatedUsers = {};

      Object.keys(users).forEach((id, index) => {
        updatedUsers[id] = {
          ...users[id],
          avatarURL: `https://i.pravatar.cc/150?img=${index + 1}`,
        };
      });
      return updatedUsers;

    case UPDATE_ANSWER:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers: {
            ...state[action.uid].answers,
            [action.uid]: action.answer,
          },
        },
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      };

    default:
      return state;
  }
};

export default users;
