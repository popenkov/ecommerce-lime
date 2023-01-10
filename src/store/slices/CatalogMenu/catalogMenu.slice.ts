import { createSlice } from "@reduxjs/toolkit";

interface catalogMenuState {
  isOpen: boolean;
  isSubcategoryShown: boolean;
}

const initialState: catalogMenuState = {
  isOpen: false,
  isSubcategoryShown: false,
};

export const catalogMenuSlice = createSlice({
  name: "catalogMenu",
  initialState,
  reducers: {
    openCatalogMenu: (state) => {
      state.isOpen = true;
    },
    closeCatalogMenu: (state) => {
      state.isOpen = false;
      state.isSubcategoryShown = false;
    },
    toggleCatalogMenu: (state) => {
      state.isOpen = !state.isOpen;
      state.isSubcategoryShown = false;
    },
    showSubcategory: (state) => {
      state.isSubcategoryShown = true;
    },
    hideSubcategory: (state) => {
      state.isSubcategoryShown = false;
    },
  },
});

export const catalogMenuActions = catalogMenuSlice.actions;
export default catalogMenuSlice.reducer;
