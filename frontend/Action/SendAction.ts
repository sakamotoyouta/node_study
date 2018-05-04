import { ActionType } from '../Constants/AppConstants';

/*
 * Send Action Creator
 */
export default function send(value) {
  // Action
  return {
    type: ActionType.SEND,
    value,
  };
}