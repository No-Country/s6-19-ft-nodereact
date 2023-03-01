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
    getAllReviews: builder.query({
      query: (id) => `reviews/${id}`,
    }),
  }),
});

export const { useCreateReviewMutation, useGetAllReviewsQuery } =
  extendedReviewApi;
