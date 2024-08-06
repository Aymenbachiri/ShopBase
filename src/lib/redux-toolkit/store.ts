import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopBaseReducer from "./shopBaseSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, shopBaseReducer);

export const createStore = (preloadedState = {}) => {
  if (typeof window === "undefined") {
    // Server-side store
    return configureStore({
      reducer: { shop: shopBaseReducer },
      preloadedState,
    });
  } else {
    // Client-side store with persistence
    return configureStore({
      reducer: { shop: persistedReducer },
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  }
};

export const store = createStore();
export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
