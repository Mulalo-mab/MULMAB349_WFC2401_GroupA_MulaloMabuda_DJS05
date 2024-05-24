/**
 * Class representing a Redux-inspired store to manage the state of a counting tally app.
 */
export class Store {
  /**
   * Create a store.
   * @param {Function} reducer - The reducer function that handles state transitions.
   */
  constructor(reducer) {
    /**
     * The reducer function to handle state transitions.
     * @type {Function}
     */
    this.reducer = reducer;

    /**
     * The current state of the store, initialized by calling the reducer with an undefined state and an empty action.
     * @type {Object}
     */
    this.state = this.reducer(undefined, {});

    /**
     * Listeners to be called when the state changes.
     * @type {Function[]}
     */
    this.listeners = [];
  }

  /**
   * Get the current state of the store.
   * @returns {Object} The current state.
   */
  getState = () => this.state;

  /**
   * Dispatch an action to the store, updating the state.
   * @param {Object} action - The action to dispatch.
   * @param {string} action.type - The type of action being dispatched.
   * @param {any} [action.payload] - The optional payload for the action.
   */
  dispatch = (action) => {
    this.state = this.reducer(this.state, action);
    this.logState();
    this.listeners.forEach((listener) => listener());
  };

  /**
   * Subscribe a listener to be called whenever the state changes.
   * @param {Function} listener - The listener to call on state changes.
   * @returns {Function} A function to unsubscribe the listener.
   */
  subscribe = (listener) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  /**
   * Log the current state to the console.
   */
  logState = () => {
    console.log("Current State:", this.state);
  };
}
