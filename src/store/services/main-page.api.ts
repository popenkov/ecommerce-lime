import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItem } from "@src/mock/CartAside";

import { ItemType, MainPageDataType } from "@src/mock/MainPageData";
const mainPagePath = "/main-page";
export const mainPageApi = createApi({
  reducerPath: "mainPageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),

  endpoints: (build) => ({
    getMainPageData: build.query<MainPageDataType, void>({
      query: () => `${mainPagePath}`,
    }),
    getPopularItemsData: build.query<ItemType[], void>({
      query: () => `/popular-items`,
    }),
  }),
});

export const { useGetMainPageDataQuery, useGetPopularItemsDataQuery } = mainPageApi;
