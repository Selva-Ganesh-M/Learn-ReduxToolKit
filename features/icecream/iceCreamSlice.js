const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfIceCreams: 5,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.noOfIceCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
