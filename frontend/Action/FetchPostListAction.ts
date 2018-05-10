import axios from 'axios';
import { ActionType } from '../Constants/AppConstants';

/*
 * Fetch List Action Creator
 */
export default function fetchPostList(dispatch: Function): void {
  axios.get('/postList').then((res) => {
    dispatch(receivePostList(res.data));
  });
}

export function receivePostList(postList: any) {
  // Action
  return {
    type: ActionType.FETCH_POST_LIST,
    postList,
  };
}

export interface postedItem {
  date: string;
  image_path: string;
  message: string;
  username: string;
};