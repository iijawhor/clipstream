import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: [],
  loading: false
};

export const searchResultSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});
export const { setSearchData, setLoading } = searchResultSlice.actions;
export default searchResultSlice.reducer;
