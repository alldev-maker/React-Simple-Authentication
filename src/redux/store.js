import { createStore } from 'redux';
import AuthReducer from './reducer';

const store = createStore(AuthReducer);
store.subscribe(() => {
  localStorage.setItem('state', store.getState());
});

export default store;
