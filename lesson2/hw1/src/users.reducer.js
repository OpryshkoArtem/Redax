import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: [],
};

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      };
    case DELETE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
