import { login } from "./user.controller";
import express from "express";
export const userRouter = express.Router();

userRouter.post('/token', login);