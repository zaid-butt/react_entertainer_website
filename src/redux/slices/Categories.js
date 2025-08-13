// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchCategories = createAsyncThunk(
  "fetchCategories",
  async () => {
    try {
      const response = await nodeApi.get("top-categories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default categoriesSlice.reducer;
