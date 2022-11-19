const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Initial state: ", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("current state: ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restock(10));

unSubscribe();
