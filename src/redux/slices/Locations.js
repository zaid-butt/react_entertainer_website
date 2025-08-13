// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchLoctions = createAsyncThunk(
  "fetchLoctions",
  async () => {
    try {
      const response = await nodeApi.get("get-locations");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const loctionsSlice = createSlice({
  name: "loctions",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoctions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLoctions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLoctions.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default loctionsSlice.reducer;
