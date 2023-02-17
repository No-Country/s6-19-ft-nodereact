import { Router } from "express";
import { createProduct } from "../controllers/product.controler";
import verifyToken from "../middlewares/verify-token";

const router = Router();

router.post("/", verifyToken, createProduct);

export default router;
