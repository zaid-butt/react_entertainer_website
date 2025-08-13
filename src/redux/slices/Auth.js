// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nodeApi } from "../../services/apiServices";

export const fetchEmail = createAsyncThunk(
  "fetchEmail",
  async ({ inputEmail, captchaToken }) => {
    try {
      const response = await nodeApi.post("email/exist", {
        email: inputEmail,
        g_captcha: captchaToken,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
);

export const fetchUser = createAsyncThunk(
  "fetchUser",
  async ({ inputEmail, inputPassword, captchaToken }) => {
    try {
      const response = await nodeApi.post("login", {
        email: inputEmail,
        password: inputPassword,
        g_captcha: captchaToken,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "fetchRegister",
  async (formData) => {
    try {
      const response = await nodeApi.post("register", {
        email: formData.email,
        password: formData.password,
        confirm_password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        country_of_residence: "ae",
        privacy_policy: "on",
        end_user_license: "on",
        verified_phone_number: "",
        g_captcha: formData.g_captcha,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    isAuthorized: (state, action) => (state = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEmail.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isAuth = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchRegister.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isAuth = true;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { isAuthorized } = authSlice.actions;
export default authSlice.reducer;
