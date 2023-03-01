import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviewsFromProduct,
  updateReview,
} from "../controllers/review.controller";
import verifyToken from "../middlewares/verify-token";
const router = Router();

router.get("/:id", verifyToken, getAllReviewsFromProduct);

router.post("/", verifyToken, createReview);

router.put("/:id", verifyToken, updateReview);

router.delete("/:id", verifyToken, deleteReview);

export default router;
