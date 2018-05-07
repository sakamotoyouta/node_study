import { ActionType } from '../Constants/AppConstants';

/*
 * Reducer
 * 一旦これも変な名前つけてます
 */
export default function formReducer(state = {}, action) {
  switch (action.type) {
    case ActionType.SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}