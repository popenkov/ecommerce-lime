import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./services";
// import { headerAnimation, bookingData, burgerMenu, popup, datepicker, statusMessage, requestCall } from "./slices";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // popup,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    baseApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
