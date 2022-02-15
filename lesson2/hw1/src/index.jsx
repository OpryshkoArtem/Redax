import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 1, name: 'Robin' }));
store.dispatch(addUser({ id: 4, name: 'John' }));
store.dispatch(addUser({ id: 3, name: 'Jenni' }));
store.dispatch(addUser({ id: 5, name: 'Ray' }));
store.dispatch(deleteUser(4));
