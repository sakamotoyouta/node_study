import { ActionType } from '../Constants/AppConstants';

/*
 * Handle Input Reducer
 */
export default function handleInputReducer(state = {}, action) {
  switch (action.type) {
    case ActionType.INPUT_TEXT:
      return Object.assign({}, state, {
        [action.event.target.name]: action.value,
      });
    case ActionType.INPUT_FILE:
      return Object.assign({}, state, {
        fileName: action.event.target.files[0].name,
        file: action.event.target.files[0],
      });
    default:
      return state;
  }
}