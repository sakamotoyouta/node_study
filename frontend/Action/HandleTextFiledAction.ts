import { ActionType } from '../Constants/AppConstants';

/*
 * Handle Text Field Action Creator
 */
export default function handleTextField(event, value) {
  // Action
  return {
    type: ActionType.INPUT_TEXT,
    event,
    value,
  };
}