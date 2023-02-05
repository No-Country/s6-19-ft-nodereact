import router from ".";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller";
import { userIdExist } from "../middlewares/verifyUser";
import { check } from "express-validator";
import handleErrors from "../middlewares/handleErrors";
import { verifyToken } from "../middlewares/verify-token";

router.get(
  "/:id",
  [
    verifyToken,
    check("id", "No es un id valido de mongo").isMongoId(),
    check("id", "Este id no existe").custom(userIdExist),
    handleErrors,
  ],
  getUser
);

router.get("/", [verifyToken], getAllUsers);

router.put("/:id", userIdExist, updateUser);
router.delete("/:id", userIdExist, deleteUser);

export default router;
