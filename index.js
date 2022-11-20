const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;
const getUsers = require("./features/user/userSlice").getUsers;

console.log("Initial state: ", store.getState());

const unSubscribe = store.subscribe(() => {});

store.dispatch(getUsers());

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(2));

// unSubscribe();
