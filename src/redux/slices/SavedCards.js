// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchSavedCards = createAsyncThunk(
  "fetchSavedCards",
  async () => {
    try {
      const response = await pythonProfileApi.post("/", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const savedCardsSlice = createSlice({
  name: "savedcards",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSavedCards.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSavedCards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSavedCards.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default savedCardsSlice.reducer;
