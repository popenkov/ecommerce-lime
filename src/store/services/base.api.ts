import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FooterDataType } from "@src/types/FooterTypes";
import { HeaderDataType } from "@src/types/HeaderTypes";

const baseUrlValue =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlValue,
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
