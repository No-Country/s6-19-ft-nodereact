import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    comment: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    commentedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

interface ReviewDocument extends Document {
  id: string;
  comment: string;
  rating: string;
  commentedBy: any;
  createdAt: number;
}

const Review = mongoose.model<ReviewDocument>("Review", reviewSchema);
export default Review;
