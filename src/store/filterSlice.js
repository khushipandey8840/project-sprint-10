import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { setCategory, setMaxPrice } = filterSlice.actions;
export default filterSlice.reducer;