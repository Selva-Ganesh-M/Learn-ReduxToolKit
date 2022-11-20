const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("Initial state: ", store.getState());

const unSubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered(1));
store.dispatch(iceCreamActions.ordered(2));

unSubscribe();
