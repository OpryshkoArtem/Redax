import { ADD_USER, DELETE_USER } from './user.actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return action.payload.user;
    }
    case DELETE_USER: {
      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
