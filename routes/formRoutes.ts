import express, { Router } from "express";
import { createOrUpdateForm, getForm } from "../controllers/formControllers";

const formRoutes: Router = express.Router();

formRoutes.put("/updateForm", createOrUpdateForm);
formRoutes.get("/getForm", getForm);
// formRoutes.put("/updateForm",)

export default formRoutes;
