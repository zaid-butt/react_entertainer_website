// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchVipKey = createAsyncThunk(
  "fetchVipKey",
  async () => {
    try {
      const response = await nodeApi.post("user/bind-vip-key", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const vipkeySlice = createSlice({
  name: "vipkey",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVipKey.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVipKey.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchVipKey.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default vipkeySlice.reducer;
