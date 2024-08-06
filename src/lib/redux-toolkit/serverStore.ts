import { configureStore } from "@reduxjs/toolkit";
import shopBaseReducer from "./shopBaseSlice";

export const createServerStore = (preloadedState = {}) => {
  return configureStore({
    reducer: { shop: shopBaseReducer },
    preloadedState,
  });
};

export type ServerRootState = ReturnType<
  ReturnType<typeof createServerStore>["getState"]
>;
