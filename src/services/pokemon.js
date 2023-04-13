// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PRODUCT } from "../api/constants";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-6260a-default-rtdb.firebaseio.com/product.json",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;

// export const contentApi = createApi({
//   reducerPath: "contentApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api",
//     // Header 보내는 방법
//     prepareHeaders: (headers) => {
//       headers.set("TEST-AUTH", "wantedpreonboarding");
//       return headers;
//     },
//   }),
//   //endpoints에서 Request하여 받은 데이터를 가지고 Hooks를 만든다.
//   endpoints: (builder) => ({
//     // 요청할 url을 query에 담아서 property에 넣는다.
//     getContents: builder.query({ query: () => "/info/contents" }),
//   }),
// });

// // 반드시 use[property 명]Query로 Hooks을 만든다. 이름이 다르면 오류 발생
// export const { useGetContentsQuery } = contentApi;
