// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchHelpSupport = createAsyncThunk(
  "fetchHelpSupport",
  async () => {
    try {
      const response = await pythonProfileApi.post("user/products", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const helpSupportSlice = createSlice({
  name: "helpSupport",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHelpSupport.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHelpSupport.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHelpSupport.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default helpSupportSlice.reducer;
