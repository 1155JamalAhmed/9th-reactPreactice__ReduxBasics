const redux = require("redux");


// the reducer
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

// the store
// connected store to the reducer
const store = redux.createStore(counterReducer);


// component
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};



//component has subscribed to the store
store.subscribe(counterSubscriber);


//we have dispatched an action
// on dispatch the counterSubscriber will run again
store.dispatch({ type: "increment" });
