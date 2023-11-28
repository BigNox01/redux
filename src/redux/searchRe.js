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
        const { data, showCompleted } = action.payload;
        if (showCompleted) {
          state.filteredData = data.filter((task) => task.completed);
        } else {
          state.filteredData = data.filter((task) => !task.completed);
        }
    },
  },
});

export const { setSearchInput, setFilteredData } = searchSlice.actions;
export default searchSlice.reducer;
