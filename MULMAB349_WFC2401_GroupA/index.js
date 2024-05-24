import { Store } from "./store.js"; // Import the Store class from store.js
import { increment, decrement, reset } from "./action.js"; // Import the action creators from action.js
import { tallyReducer } from "./reducer.js"; // Import the reducer function from reducer.js

// Create a new store with the tally reducer
const store = new Store(tallyReducer);

// Subscribe to state changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById("count-el").innerText = state.count;
  console.log("State changed:", state);
});

// Attach functions to the window object for global access
window.increment = () => {
  store.dispatch(increment());
};

window.decrement = () => {
  store.dispatch(decrement());
};

window.reset = () => {
  store.dispatch(reset());
};

// Scenario 1: Initial State Verification
console.log("Scenario 1: Initial State Verification");
console.log(store.getState()); // Should show { count: 0 }

// Scenario 2: Incrementing the Counter
console.log("Scenario 2: Incrementing the Counter");
store.dispatch(increment()); // Should show { count: 1 }
store.dispatch(increment()); // Should show { count: 2 }

// Scenario 3: Decrementing the Counter
console.log("Scenario 3: Decrementing the Counter");
store.dispatch(decrement()); // Should show { count: 1 }

// Scenario 4: Resetting the Counter
console.log("Scenario 4: Resetting the Counter");
store.dispatch(reset()); // Should show { count: 0 }
