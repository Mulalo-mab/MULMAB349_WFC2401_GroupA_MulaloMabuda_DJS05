/**
 * @constant {string} INCREMENT - Action type for incrementing the count.
 */
export const INCREMENT = "INCREMENT";

/**
 * @constant {string} DECREMENT - Action type for decrementing the count.
 */
export const DECREMENT = "DECREMENT";

/**
 * @constant {string} RESET - Action type for resetting the count to 0.
 */
export const RESET = "RESET";

/**
 * Creates an action to increment the count by a specified value.
 *
 * @function
 * @param {number} [value=1] - The value by which to increment the count. Defaults to 1.
 * @returns {Object} The action object with type 'INCREMENT' and the payload.
 */
export const increment = (value = 1) => ({
  type: INCREMENT,
  payload: value,
});

/**
 * Creates an action to decrement the count by a specified value.
 *
 * @function
 * @param {number} [value=1] - The value by which to decrement the count. Defaults to 1.
 * @returns {Object} The action object with type 'DECREMENT' and the payload.
 */
export const decrement = (value = 1) => ({
  type: DECREMENT,
  payload: value,
});

/**
 * Creates an action to reset the count to 0.
 *
 * @function
 * @returns {Object} The action object with type 'RESET'.
 */
export const reset = () => ({
  type: RESET,
});
