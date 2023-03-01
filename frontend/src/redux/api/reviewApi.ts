import { emptyApi } from "./emptyApi";

const extendedReviewApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (body) => ({
        url: "reviews/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = extendedReviewApi;
