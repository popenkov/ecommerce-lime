import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  isOpen: boolean;
  items: [];
}

const initialState: cartState = {
  isOpen: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    closeCatalogMenu: (state) => {},
  },
});

export const catalogMenuActions = cartSlice.actions;
export default cartSlice.reducer;
