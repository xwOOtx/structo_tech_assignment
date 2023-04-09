import { login, refreshJwtToken } from "./user.controller";
import express from "express";
import { auth } from "../auth";
export const userRouter = express.Router();

userRouter.post("/token", login);
userRouter.post("/token/refresh", auth, refreshJwtToken);