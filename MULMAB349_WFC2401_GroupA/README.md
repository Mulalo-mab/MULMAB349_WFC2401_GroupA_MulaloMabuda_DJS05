# Tally Counter App

This project is a simple counting tally application implemented using a Redux-inspired store to manage state transitions. It consists of HTML, CSS, and JavaScript files, with the JavaScript following the module pattern.

# Project Structure

index.html: The main HTML file that sets up the UI with buttons and a display element.
index.css: The CSS file for styling the UI.
index.js: The main JavaScript file that initializes the store, sets up event listeners, and handles state changes.
store.js: Contains the Store class which manages the state and notifies subscribers about state changes.
action.js: Defines the action types and action creators for incrementing, decrementing, and resetting the count.
reducer.js: Defines the reducer function which handles state transitions based on the dispatched actions.
