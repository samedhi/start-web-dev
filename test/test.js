var main = require("../src/main.js"),
    store = main.store;

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    store.dispatch({ type: 'RESET' });
    expect(store.getState()).toBe(0);
    store.dispatch({ type: 'INCREMENT'});
    expect(store.getState()).toBe(1);
  });
});
