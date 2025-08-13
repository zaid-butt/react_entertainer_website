// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { familyApi } from "../../services/apiServices";

export const fetchFamily = createAsyncThunk(
  "fetchFamily",
  async ({ userId, lang, loc }) => {
    try {
      const response = await familyApi.post("family/familyinfo", {
        language: lang,
        __lat: "25.095395",
        company: "entertainer",
        __i: "9108540",
        currency: "USD",
        user_id: userId,
        lng: "55.154117",
       
        location_id: loc,
        family_limit: 1,
        
        time_zone: "Asia/Karachi",
        __lng: "55.154117",
        
        lat: "25.095395",
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const familySlice = createSlice({
  name: "family",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFamily.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFamily.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFamily.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default familySlice.reducer;
