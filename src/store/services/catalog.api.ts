import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatalogItemType } from "@src/mock/CatalogMenuData";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getCatalogMenuData: build.query<CatalogItemType[], void>({
      query: () => `/catalog`,
    }),
  }),
});

export const { useGetCatalogMenuDataQuery } = catalogApi;
