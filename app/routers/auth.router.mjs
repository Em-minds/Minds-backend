import express from "express";
import { signup } from "../controllers/auth.controller.mjs";

export const authRouter = express.Router();

authRouter.post('/create-user', signup)