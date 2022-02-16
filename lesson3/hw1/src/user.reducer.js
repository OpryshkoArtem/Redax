import { ADD_USER, DELETE_USER } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        state: action.payload.user,
      };
    }
    case DELETE_USER: {
      return {
        state: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;