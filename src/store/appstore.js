import { configureStore } from "@reduxjs/toolkit";
import videoDataSlice from "./videoDataSlice";
import homeDataSlice from "./homeDataSlice";
import relatedVideoSlice from "./relatedVideoSlice";

export const appStore = configureStore({
  reducer: {
    videoData: videoDataSlice,
    feedData: homeDataSlice,
    relatedVideo: relatedVideoSlice
  }
});
