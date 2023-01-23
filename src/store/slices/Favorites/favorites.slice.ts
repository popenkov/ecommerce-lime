import { createSlice } from "@reduxjs/toolkit";

import { EnergyType, ItemType } from "@src/types/commonTypes";
import { calculateEnergie } from "@src/utils/CalculateEnergy";

interface favoritesState {
  items: ItemType[];
  totalCount: number;
}

const initialState: favoritesState = {
  items: [],
  totalCount: 0,
};

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.items = [];
    },
    removeItemfromFavorites: (state, action) => {
      const id = action.payload;
      const newItems = state.items.filter((item) => {
        return item.id != id;
      });
      return {
        ...state,
        items: newItems,
        totalCount: newItems.reduce((sum, obj) => {
          return obj.amount + sum;
        }, 0),
      };
    },

    addItemToFavorites: (state, action) => {
      const newItems = [...state.items, action.payload];

      return {
        ...state,
        items: newItems,

        totalCount: newItems.reduce((sum, obj) => {
          return obj.amount + sum;
        }, 0),
      };
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
