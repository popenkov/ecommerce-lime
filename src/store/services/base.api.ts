import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FooterDataType } from "@src/types/FooterTypes";
import { HeaderDataType } from "@src/types/HeaderTypes";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_HEROKU_URL,
  }),
  endpoints: (build) => ({
    getHeaderData: build.query<HeaderDataType, void>({
      query: () => `/header`,
    }),
    getFooterData: build.query<FooterDataType, void>({
      query: () => `/footer`,
    }),
  }),
});

export const { useGetHeaderDataQuery, useGetFooterDataQuery } = baseApi;
