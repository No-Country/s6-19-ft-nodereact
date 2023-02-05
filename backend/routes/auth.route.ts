import router from ".";
import {
  createResetSession,
  generateOTP,
  login,
  register,
  resetPassword,
  verifyOTP,
} from "../controllers/auth.controller";
import localVariables from "../middlewares/local-variables";
import { verifyUser } from "../middlewares/verifyUser";

router.post("/login", login);
router.post("/register", register);
router.get("/generateOTP", verifyUser, localVariables, generateOTP);
router.get("/verifyOTP", verifyUser, verifyOTP);
router.get("/create-reset-session", createResetSession);
router.put("/reset-password", verifyUser, resetPassword);

export default router;
