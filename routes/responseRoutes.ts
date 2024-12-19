import express, { Router } from "express";
import { saveFormResponse } from "../controllers/responseControllers";

const responseRoutes: Router = express.Router();

responseRoutes.post("/submitFormResponse", saveFormResponse);
responseRoutes.get("/getFormResponse");

export default responseRoutes;
