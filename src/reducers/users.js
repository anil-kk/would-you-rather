import { INIT_USERS } from '../actions/types';

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
    default:
      return state;
  }
};

export default users;
