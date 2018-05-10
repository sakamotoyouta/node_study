import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware} from 'react-router-redux';
import formReducer from '../Reducer/FormReducer';
import postListReducer from '../Reducer/PostListReducer';

/*
 * 初期state
 */
const initialState: any = {
  value: null,
  postList: [],
};

const combinedReducer = combineReducers({
  value: formReducer,
  postList: postListReducer,
});

/*
 * Store
 */
const history = createHistory();
const middleware = routerMiddleware(history);
const Store = createStore(combinedReducer,initialState, applyMiddleware(middleware));

export { history };
export default Store;
