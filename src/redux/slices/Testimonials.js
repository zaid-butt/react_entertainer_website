// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonSearchApi } from "../../services/apiServices";

export const fetchTestimonials = createAsyncThunk(
  "fetchTestimonials",
  async ({lang}) => {
    try {
      const response = await pythonSearchApi.post("testimonials-list", {
          offset: "0",
          limit: "15",
          session_token: "3119864acf5379d2976.49742066",
          __t: "3119864acf5379d2976.49742066",
          language: lang,
          company: "entertainer",
          __c: "entertainer",
          wlcompany: "entertainer"
      
      });
      console.log('Testimonials response:- ',response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonials.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTestimonials.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTestimonials.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default testimonialsSlice.reducer;
