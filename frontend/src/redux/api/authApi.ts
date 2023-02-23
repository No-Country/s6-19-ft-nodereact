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

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  img: string;
  rating: number;
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
    getAllEbooks: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getSingleEbook: builder.query<Product, string | undefined>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useGetAllEbooksQuery,
  useGetSingleEbookQuery,
} = authApi;
