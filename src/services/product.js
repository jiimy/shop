// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PRODUCT } from "../api/constants";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-6260a-default-rtdb.firebaseio.com/product.json",
  }),
  // NOTE: endpoints 에 선언하는 이름(getProduct)와 export하는 이름이 비슷해야 하나?
  // getProduct , useGetProductQuery
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (name) => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery } = productApi;
