import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';
import productReducer from './cart.reducer';

const rootReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
	cart: productReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;