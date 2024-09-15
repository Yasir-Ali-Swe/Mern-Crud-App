import express from "express";
import { create } from "../controllers/userControllers";
const route = express.Router();

route.post("/create", create);

export default route;
