import store from './store';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ua'));
store.dispatch(setLanguage('jp'));

store.dispatch(setUser({name: 'Bobby'}));
store.dispatch(removeUser());

store.dispatch(addProduct({id: 1, name: 'Vine'}));
store.dispatch(addProduct({id: 2, name: 'Milk'}));
store.dispatch(removeProduct(1));
