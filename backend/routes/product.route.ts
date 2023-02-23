import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product.controler";
import verifyToken from "../middlewares/verify-token";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.post("/", verifyToken, createProduct);

export default router;
