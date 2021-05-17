const redux = require("redux");

//Should be a pure function -> same input leads to same output (NO SIDE EFFECTS e.g: no http, no fetch, etc)
//Inputs: Old State + Dispatched Action
//Output: New State Object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//STORE CREATION
const store = redux.createStore(counterReducer);

//SUBSCRIPTION
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
