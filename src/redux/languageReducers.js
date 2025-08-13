// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en',
  reducers: {
    language: (state, action) => state = action.payload,
  },
});

export const { language } = languageSlice.actions;

export default languageSlice.reducer;
