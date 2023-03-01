import { emptyApi } from "./emptyApi";

const extendedReviewApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `reviews/${id}`,
        method: "POST",
        body: rest,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = extendedReviewApi;
