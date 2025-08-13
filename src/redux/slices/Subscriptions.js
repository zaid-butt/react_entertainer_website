// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchSubscriptions = createAsyncThunk(
  "fetchSubscriptions",
  async () => {
    try {
      const response = await pythonProfileApi.post("user/products", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const subSlice = createSlice({
  name: "subscriptions",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubscriptions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSubscriptions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSubscriptions.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default subSlice.reducer;
