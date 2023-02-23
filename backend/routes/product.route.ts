import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controler";
import verifyToken from "../middlewares/verify-token";

const router = Router();

router.get("/", getAllProducts);

router.post("/", verifyToken, createProduct);

export default router;
