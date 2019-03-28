/**
 * Wraps the `window.console.log` function, and provides us with a specific
 * function to spy on (in the cypress tests).
 */
global.testConsole = (...args) => {
  console.log(...args); // eslint-disable-line
};
