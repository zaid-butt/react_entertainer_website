// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchHomeSections = createAsyncThunk(
  "fetchHomeSections",
  async ({lang}) => {
    const response = await nodeApi.get("get-home-sections");
    return response.data;
  }
);


const homeSectionsSlice = createSlice({
  name: "homeSections",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeSections.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHomeSections.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHomeSections.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default homeSectionsSlice.reducer;
