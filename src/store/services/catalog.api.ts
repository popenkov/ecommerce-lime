import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CatalogItemType } from "@src/types/CatalogMenuTypes";

const baseUrlValue =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL;

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlValue,
  }),
  endpoints: (build) => ({
    getCatalogMenuData: build.query<CatalogItemType[], void>({
      query: () => `/catalog`,
    }),
  }),
});

export const { useGetCatalogMenuDataQuery } = catalogApi;
