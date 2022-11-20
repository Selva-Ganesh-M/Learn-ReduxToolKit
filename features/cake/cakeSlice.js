// why extra reducers?
// if you want an action of a particular state to have an effect on another state then one should go for the extra reducers.

// here, we'd like to have an arrangement like, If a customer orders an iceCream a cake is free for them.

// for this process to work we need to access the iceCreamActions inside the cakeSlice

const createSlice = require("@reduxjs/toolkit").createSlice;
const iceCreamActions = require("../icecream/iceCreamSlice").iceCreamActions;

const initialState = {
  noOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.noOfCakes += action.payload;
      console.log(action);
    },
  },
  //   extraReducers
  // mtd-1
  //   extraReducers: {
  //     ["iceCream/ordered"]: (state) => {
  //       state.noOfCakes--;
  //     },
  //   },
  // mtd-2  suggested method to use
  extraReducers: (builder) => {
    builder.addCase(iceCreamActions.ordered, (state, action) => {
      state.noOfCakes--;
    });
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
