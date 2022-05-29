import { PREV_PAGE, NEXT_PAGE } from './users.actions';
import users from '../users';

const initialState = {
  users: { usersList: [...users], currentPage: 1 },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        },
      };
    case NEXT_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        },
      };
    default:
      return state;
  }
};

export default counterReducer;
