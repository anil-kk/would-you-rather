import { INIT_USERS, UPDATE_ANSWER } from '../actions/types';

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
          [action.uid] : {
            ...state[action.uid],
            answers: {
              ...state[action.uid].answers,
              [action.uid]: action.answer
            }
          }
        }

    default:
      return state;
  }
};

export default users;
