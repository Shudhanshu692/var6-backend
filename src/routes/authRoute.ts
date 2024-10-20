import { Router } from "express";
import { signup, login, forgetPassword } from "../controllers/authController";
import { validateSignup, validateLogin } from "../validators/authValidators";

const router = Router();

router.post(
  "/signup",
  validateSignup,
  async (req: any, res: any, next: any) => {
    try {
      await signup(req, res); // Make sure signup doesn't return a response directly
      next(); // Move to the next middleware if needed
    } catch (err) {
      next(err); // Forward the error to the error handler middleware
    }
  }
);

router.post("/login", validateLogin, async (req: any, res: any, next: any) => {
  try {
    await login(req, res);
    next(); // Move to the next middleware
  } catch (err) {
    next(err); // Forward the error to the error handler middleware
  }
});

router.post("/forget-password", async (req: any, res: any, next: any) => {
  try {
    await forgetPassword(req, res);
    next();
  } catch (err) {
    next(err);
  }
});

export default router;
