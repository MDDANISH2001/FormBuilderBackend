import express, { Router } from "express";
import { loginUser, registerUser } from "../controllers/authControllers";

const authRoutes: Router = express.Router();

authRoutes.post("/createUser", registerUser);
authRoutes.post("/login", loginUser); // Typically login is POST, not GET

export default authRoutes;
