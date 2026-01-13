import express from "express";
import { login, register, getMe, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", getMe);
router.post("/logout", logout);

export default router;