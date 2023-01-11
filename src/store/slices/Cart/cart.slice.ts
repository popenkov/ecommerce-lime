import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "@src/mock/MainPageData";
import { isMetaProperty } from "typescript";

interface cartState {
  isLoading: boolean;
  items: ItemType[];
  totalPrice: number;
  totalCount: number;
}

const initialState: cartState = {
  isLoading: false,
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    removeItemfromCart: (state, action) => {
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
        totalPrice: newItems.reduce((sum, obj) => {
          return obj.price.price + sum;
        }, 0),
      };
    },

    addItemToCart: (state, action) => {
      //   console.log(action.payload.id);
      //   const id = action.payload.id;
      //   const currentItem = state.items.find((item) => {
      //     console.log(item);
      //     return item.id === id;
      //   });

      //   console.log(currentItem);
      //   const currentItem = state.items[id] ? [...state.items[id], state.items[id].amount + 1] : [action.payload];

      const newItems = [...state.items, action.payload];

      return {
        ...state,
        items: newItems,

        totalCount: newItems.reduce((sum, obj) => {
          return obj.amount + sum;
        }, 0),
        totalPrice: newItems.reduce((sum, obj) => {
          return obj.price.price + sum;
        }, 0),
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
