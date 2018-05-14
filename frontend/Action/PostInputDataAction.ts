import axios from 'axios';
import { ActionType } from '../Constants/AppConstants';

/*
 * postInputData Action Creator
 */
export default function postInputData(inputData) {
  const requestBody = inputData.file;
  const requestHeader = {
    headers: {
      'X-UserName': inputData.userName,
      'X-Message': inputData.message,
      'content-type': 'application/octet-stream',
    }
  }
  axios.post('/postList', requestBody, requestHeader).then((res) => {
    console.log('success!');
    // TODO：postの結果をdispatch
    // dispatch(recievePostResult(res.data));
  });
  return {
    // TODO：dispatchされる関数は何かしらのtypeを返さないとコンソールエラーが発生する
    type: ActionType.POST_IMAGE,
  }
}

export function recievePostResult(result) {
  // Action
  return {
    type: ActionType.POST_IMAGE,
    result,
  };
}