import express from "express";
import { auth } from "../middlewares/auth";
import { about } from "./about.controller";
export const aboutRouter = express.Router();

aboutRouter.get('/about', auth, about);