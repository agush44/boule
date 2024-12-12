import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/userController.js";
import {
  registerSchemaJoi,
  loginSchemaJoi,
} from "../validations/userValidation.js";
import validate from "../middleware/validate.js";

const userRoutes = Router();

userRoutes.post(
  "/register",
  validate(registerSchemaJoi),
  registerUserController
);
userRoutes.post("/login", validate(loginSchemaJoi), loginUserController);

export { userRoutes };
