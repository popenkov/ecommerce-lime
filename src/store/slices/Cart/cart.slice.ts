import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "@src/mock/MainPageData";

interface cartState {
  items: ItemType[];
  totalPrice: number;
  totalCount: number;
}

const initialState: cartState = {
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

    changeItemAmount: (state, action) => {
      const { id, currentAmount } = action.payload;
      const currentItemIndex = state.items.findIndex((item) => item.id == id);
      const items = [...state.items];
      items[currentItemIndex] = { ...items[currentItemIndex], amount: currentAmount };

      return {
        ...state,

        items: items,

        totalCount: items.reduce((sum, item) => {
          return item.amount + sum;
        }, 0),

        totalPrice: items.reduce((sum, item) => {
          return item.price.price * item.amount + sum;
        }, 0),
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
