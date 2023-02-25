import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  price: "",
  rating: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory: (state, { payload }) => {
      state.category = payload;
    },
    addPrice: (state, { payload }) => {
      state.category = payload;
    },
    addRating: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const { addCategory, addPrice, addRating } = filterSlice.actions;

export default filterSlice.reducer;
