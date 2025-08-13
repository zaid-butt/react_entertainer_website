// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { familyApi } from "../../services/apiServices";

export const fetchLeaderboard = createAsyncThunk(
  "fetchLeaderboard",
  async ({ userId, lang, loc }) => {
    try {
      const response = await familyApi.post("vipkey", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeaderboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLeaderboard.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default leaderboardSlice.reducer;
