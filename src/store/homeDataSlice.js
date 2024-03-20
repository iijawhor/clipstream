import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedData: []
};

export const homeDataSlice = createSlice({
  name: "feedData",
  initialState,
  reducers: {
    setFeedData: (state, action) => {
      state.feedData = action.payload;
    }
  }
});
export const { setFeedData } = homeDataSlice.actions;
export default homeDataSlice.reducer;
