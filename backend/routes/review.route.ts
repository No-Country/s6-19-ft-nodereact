import { Router } from "express";
import {
  createReview,
  deleteReview,
  updateReview,
} from "../controllers/review.controller";
import verifyToken from "../middlewares/verify-token";
const router = Router();

router.post("/:id", verifyToken, createReview);

router.put("/:id", verifyToken, updateReview);

router.delete("/:id", verifyToken, deleteReview);

export default router;
