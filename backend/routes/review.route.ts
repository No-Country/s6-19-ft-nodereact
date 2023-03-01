import { Router } from "express";
import { createReview } from "../controllers/review.controller";
import verifyToken from "../middlewares/verify-token";
const router = Router();

router.post("/:id", verifyToken, createReview);

export default router;
