import { createSlice } from "@reduxjs/toolkit";

import { getStoreLocal } from "@src/utils/localStorage";

import { login, logout, register, getUserData } from "./user.actions";

const initialState = {
  isLoggedIn: Boolean(getStoreLocal("user")),
  user: getStoreLocal("user"),
  userData: {},
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.userData = payload;
      })
      .addCase(getUserData.rejected, (state) => {
        state.userData = {};
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
