// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchPlans = createAsyncThunk(
  "fetchPlans",
  async () => {
    try {
      const response = await nodeApi.get("plans");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const plansSlice = createSlice({
  name: "plans",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlans.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlans.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlans.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default plansSlice.reducer;
