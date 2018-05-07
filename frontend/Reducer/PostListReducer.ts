import { ActionType } from '../Constants/AppConstants';

/*
 * Post List Reducer
 */
export default function postListReducer(state = [], action) {
  switch (action.type) {
    case ActionType.FETCH_POST_LIST:
      return [...state, ...action.postList];
    default:
      return state;
  }
}