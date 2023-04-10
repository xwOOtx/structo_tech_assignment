import { login, refreshJwt } from "./user.controller";
import express from "express";
import { auth } from "../middlewares/auth";
export const userRouter = express.Router();

userRouter.post("/token", login);
userRouter.post("/refreshToken", auth, refreshJwt);