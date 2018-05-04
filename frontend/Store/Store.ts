import { createStore } from 'redux';
import formReducer from '../Reducer/FormReducer';

/*
 * 初期state
 */
const initialState = {
  value: null,
};

/*
 * Store
 */
const Store = createStore(formReducer, initialState);

export default Store;
