import { emptyApi } from "./emptyApi";

const extendedCartApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (body) => ({
        url: "/payments",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = extendedCartApi;
