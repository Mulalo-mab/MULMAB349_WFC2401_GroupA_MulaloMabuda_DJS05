import { INCREMENT, DECREMENT, RESET } from "./action.js";

/**
 * Reducer function to manage the state of the tally counter.
 *
 * @function
 * @param {Object} state - The current state of the tally counter.
 * @param {number} state.count - The current count value in the state.
 * @param {Object} action - The action dispatched to the reducer.
 * @param {string} action.type - The type of action being handled.
 * @param {number} [action.payload] - The payload associated with the action (if any).
 * @returns {Object} The new state after applying the action.
 */
export const tallyReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: Math.max(0, state.count - action.payload) };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
