import { configureStore } from "@reduxjs/toolkit";

import { baseApi, catalogApi, mainPageApi } from "./services";

import { catalogMenu, cart } from "./slices";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [mainPageApi.reducerPath]: mainPageApi.reducer,
    catalogMenu,
    cart,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    baseApi.middleware,
    catalogApi.middleware,
    mainPageApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
