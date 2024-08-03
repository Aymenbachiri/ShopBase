import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CartStateTypes, ProductCartProps } from "../types/cartTypes";

const initialState: CartStateTypes = {
  products: [],
};

export const shopBaseSlice = createSlice({
  name: "shopBaseStore",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCartProps>) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = shopBaseSlice.actions;

export default shopBaseSlice.reducer;
