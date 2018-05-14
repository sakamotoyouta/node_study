import { ActionType } from '../Constants/AppConstants';

/*
 * Handle Text Field Action Creator
 */
export default function handleFileInput(event) {
  // Action
  return {
    type: ActionType.INPUT_FILE,
    event,
  };
}