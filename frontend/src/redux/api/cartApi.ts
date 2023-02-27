import { emptyApi } from "./emptyApi";
import { Ebook } from "../../types";

type Item = {
  item: Ebook;
  quantity: Number;
  total: Number;
  id: String;
};

interface Cart {
  owner: String;
  items: Item[];
  subTotal: Number;
  totalQty: Number;
}

type prepareHeaders = (
  headers: Headers,
  api: {
    getState: () => unknown;
    extra: unknown;
    endpoint: string;
    type: "query" | "mutation";
    forced: boolean | undefined;
  }
) => Headers | void;

const extendedCartApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (body) => ({
        url: "/payments",
        method: "POST",
        body,
      }),
    }),
    getCart: builder.query<Cart, void>({
      query: () => "/cart",
    }),
  }),
});

export const { useCreatePaymentMutation, useGetCartQuery } = extendedCartApi;
