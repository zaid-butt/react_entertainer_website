// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchNotifications = createAsyncThunk(
  "fetchNotifications",
  async () => {
    try {
      const response = await pythonProfileApi.post("user/products", {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default notificationsSlice.reducer;
