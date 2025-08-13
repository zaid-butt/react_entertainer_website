// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchPlanDetails = createAsyncThunk(
  "fetchPlanDetails",
  async ({slug}) => {
    try {
      const response = await nodeApi.get("product-detail?slug="+slug);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const planDetailsSlice = createSlice({
  name: "planDetails",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlanDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlanDetails.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default planDetailsSlice.reducer;
