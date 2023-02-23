import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  msg: string;
  username: string;
  token: string;
}

interface Body {
  username?: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  msg: string;
  user: object;
}

interface BodyRegister {
  username: string;
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no-country-personaltrainer.onrender.com/api/",
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Body>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, BodyRegister>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
