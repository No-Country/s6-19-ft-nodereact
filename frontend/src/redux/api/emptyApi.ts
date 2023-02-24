import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no-country-personaltrainer.onrender.com/api/",
  }),

  endpoints: () => ({}),
});
