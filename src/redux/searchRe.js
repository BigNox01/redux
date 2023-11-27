import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    filteredData: [],
  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
  },
});

export const { setSearchInput, setFilteredData } = searchSlice.actions;
export default searchSlice.reducer;
