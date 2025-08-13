// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const searchesSlice = createSlice({
  name: "Search",
  initialState: {
    // isLoading: false,
    cuisinesParmas: {},
    merchantParams: {},
  },
  reducers: {
    setCuisinesParams: (state, action) => {
      state.cuisinesParmas = action.payload;
    },
    setMerchantParams: (state, action) => {
      state.merchantParams = action.payload;
    },
  },
});

export const { setCuisinesParams, setMerchantParams, setSearchChange } =
  searchesSlice.actions;

export default searchesSlice.reducer;
