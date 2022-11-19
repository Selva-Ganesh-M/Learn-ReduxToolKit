const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restock: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

// old method for reference

// const ORDERED = "ORDERED";
// const RESTOCK = "RESTOCK";

// const orderReceived = () => {
//   return {
//     type: ORDERED,
//     payload: 1,
//   };
// };
// const restocking = (quantity) => {
//   return {
//     type: RESTOCK,
//     payload: quantity,
//   };
// };

// const initialState = {
//   noOfIceCreams: 10,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ORDERED:
//       return {
//         ...state,
//         noOfIceCreams: state.noOfIceCreams - action.payload,
//       };
//     case RESTOCK:
//       return {
//         noOfIceCreams: state.noOfIceCreams + action.payload,
//       };
//   }
// };
