import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB okay");
    app.listen(PORT, () => {
      console.log("Server is running.");
    });
  })
  .catch((error) => console.log("Error ", error));
