const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

// async thunk is used to generate async actions
// the method getUsers returns the getUsers.pending, fulfilled and rejected actions
const getUsers = createAsyncThunk("user/getUsers", () => {
  return axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((item) => item.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = "";
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.getUsers = getUsers;
