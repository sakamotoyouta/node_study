import { createStore, combineReducers, applyMiddleware } from 'redux';
import formReducer from '../Reducer/FormReducer';
import postListReducer from '../Reducer/PostListReducer';

/*
 * 初期state
 */
const initialState: any = {
  value: null,
  postList: [],
};

const rootReducer = combineReducers({
  value: formReducer,
  postList: postListReducer,
});

/*
 * Store
 */
const Store = createStore(rootReducer, initialState);

export default Store;
