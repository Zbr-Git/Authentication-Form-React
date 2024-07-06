import { Router } from "express";
import { login, logout, register } from "../../controllers/auth/index.js";

const AuthRouter = Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);

export default AuthRouter;
