import express from "express";
import { create, getAll } from "../controllers/userControllers.js";
const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
export default route;
