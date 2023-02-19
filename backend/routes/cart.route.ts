import { Router } from "express";
import {
  addProductToCart,
  getCart,
  updateProductQty,
} from "../controllers/cart.controller";
import verifyToken from "../middlewares/verify-token";
const router = Router();

router.get("/", verifyToken, getCart);

router.post("/", verifyToken, addProductToCart);

router.put("/:id", verifyToken, updateProductQty);

// router.delete("/:id", verifyToken, removeProduct);

// router.delete("/", verifyToken, emptyCart);

export default router;
