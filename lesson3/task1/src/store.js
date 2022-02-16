import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import usersReducer from './users.reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

export default store;
