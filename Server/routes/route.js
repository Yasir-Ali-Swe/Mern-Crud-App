import express from "express";
import {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../controllers/userControllers.js";
const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.delete("/deleteOne/:id", deleteOne);
route.put("/updateOne/:id", updateOne);
export default route;
