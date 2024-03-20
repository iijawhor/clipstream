import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoData: {},
  videoComments: []
};

export const videoDataSlice = createSlice({
  name: "videoData",
  initialState,
  reducers: {
    setVideoData: (state, action) => {
      state.videoData = action.payload;
    },
    setVideoComments: (state, action) => {
      state.videoComments = action.payload;
    }
  }
});
export const { setVideoData, setVideoComments } = videoDataSlice.actions;
export default videoDataSlice.reducer;
