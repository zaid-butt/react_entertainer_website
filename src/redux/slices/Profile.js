// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonProfileApi } from "../../services/apiServices";

export const fetchProfile = createAsyncThunk("fetchProfile", async () => {
  try {
    const response = await pythonProfileApi.post("user/customer-profile", {
      os_version: "16.5",

      device_key: "ios-14F6524D-1A56-43D0-9942-915C3296BC76",

      session_token: "87fb1a44-dbd9-4a0a-a846-a52d671e926d",

      company: "entertainer",

      language: "en",

      currency: "USD",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default profileSlice.reducer;
