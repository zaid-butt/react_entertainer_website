// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchPreferences = createAsyncThunk(
  "fetchPreferences",
  async () => {
    try {
      const response = await pythonProfileApi.post("user/products", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreferences.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPreferences.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPreferences.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default preferencesSlice.reducer;
