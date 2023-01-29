import { createSlice } from "@reduxjs/toolkit";
import { getStoreLocal } from "@src/utils/localStorage";

import { login, logout, register } from "./user.actions";

const initialState = {
  isLoggedIn: Boolean(getStoreLocal("userToken")),
  userToken: getStoreLocal("userToken"),
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state) => {
      //   state.isOpen = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userToken = payload.token;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.userToken = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userToken = payload.token;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.userToken = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userToken = null;
      });
  },
});

export const { reducer } = userSlice;
