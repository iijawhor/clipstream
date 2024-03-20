import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  relatedVideo: []
};

export const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  reducers: {
    setRelatedVideo: (state, action) => {
      state.relatedVideo = action.payload;
    }
  }
});
export const { setRelatedVideo } = relatedVideoSlice.actions;
export default relatedVideoSlice.reducer;
