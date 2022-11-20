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
