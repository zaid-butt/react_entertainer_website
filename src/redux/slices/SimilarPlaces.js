// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonApi } from "../../services/apiServices";

export const fetchSimilarPlaces = createAsyncThunk(
  "fetchSimilarPlaces",
  async () => {
    try {
      const response = await pythonApi.post("similar_es_outlets", {
        custom_types: ["buy_one_get_one_free"],
        sub_category_cuisine_or_attribute_ids: ["cuisines_4_1"],
        category: "Restaurants and Bars",
        from_search: "false",
        include_travel_outlets: false,
        lat: "31.5274128",
        lng: "74.3528602",
        __lat: "31.5274128",
        __lng: "74.3528602",
        time_zone: "Asia/Karachi",
        session_token: "bef76212-8bd4-4970-a660-7a9d363b8abf",
        __t: "bef76212-8bd4-4970-a660-7a9d363b8abf",
        currency: "USD",
        language: "en",
        location_id: "1",
        user_id: "8644277",
        customer_id: "8644277",
        company: "entertainer",
        __c: "entertainer",
        app_version: "8.18.04",
        __platform: "android",
        platform: "android",
        device_os: "android",
        __device_id: "5f2d6e0210cc1a0a1690814462312",
        device_model: "Xiaomi%202107113SG",
        device_key: "5f2d6e0210cc1a0a1690814462312",
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const similarplacesSlice = createSlice({
  name: "similarplaces",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSimilarPlaces.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSimilarPlaces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSimilarPlaces.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default similarplacesSlice.reducer;
