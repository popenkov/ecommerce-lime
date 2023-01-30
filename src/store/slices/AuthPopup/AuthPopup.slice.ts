import { createSlice } from "@reduxjs/toolkit";

interface AuthPopupState {
  isOpen: boolean;
}

const initialState: AuthPopupState = {
  isOpen: false,
};

export const authPopupSlice = createSlice({
  name: "authPopup",
  initialState,
  reducers: {
    openAuthPopup: (state) => {
      state.isOpen = true;
    },
    closeAuthPopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const authPopupActions = authPopupSlice.actions;
export default authPopupSlice.reducer;
