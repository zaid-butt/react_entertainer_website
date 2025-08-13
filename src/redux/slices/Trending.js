// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pythonApi } from "../../services/apiServices";

export const fetchTrending = createAsyncThunk(
  "fetchTrending",
  async ({ loc, lang, cate, neibours=[] }) => {
    try {
      const response = await pythonApi.post("trending_merchants", {
        __lat: 25.112373,
        __lng: 55.204517,
        is_location_disabled: "false",
        offset: "1",
        only_distinct_outlets: false,
        category: cate,
        auto_redeembility: "true",
        is_last_mile_enabled: "true",
        include_travel_outlets: "false",
        epc_enabled: true,
        currency: "AED",
        language: lang,
        location_id: loc,
        company: "entertainer",
        __c: "entertainer",
        filter_neighborhoods: neibours,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchTrendingNeigbours = createAsyncThunk(
  "fetchTrendingNeigbours",
  async ({ loc, lang, cate, neibours }) => {
    try {
      const response = await pythonApi.post("trending_merchants", {
        __lat: 25.112373,
        __lng: 55.204517,
        is_location_disabled: "false",
        offset: "1",
        only_distinct_outlets: false,
        category: cate,
        auto_redeembility: "true",
        is_last_mile_enabled: "true",
        include_travel_outlets: "false",
        epc_enabled: true,
        currency: "AED",
        language: lang,
        location_id: loc,
        company: "entertainer",
        __c: "entertainer",
        filter_neighborhoods: neibours,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    isNeighbours: false,
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      sessionStorage.setItem("neighborhoods", JSON.stringify(action.payload));
    });
    builder.addCase(fetchTrending.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });


    builder.addCase(fetchTrendingNeigbours.pending, (state, action) => {
      // state.isLoading = true;
      state.isNeighbours = true;
    });
    builder.addCase(fetchTrendingNeigbours.fulfilled, (state, action) => {
      state.isNeighbours = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTrendingNeigbours.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default trendingSlice.reducer;
