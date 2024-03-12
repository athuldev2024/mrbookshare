import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./src/routes";
import bodyParser from "body-parser";
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express(),
  server = http.createServer(app),
  PORT = process.env.API_PORT || 5000,
  MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", routes); // All routes for this application

(async function () {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connected with MongoDB!");
  } catch (error) {
    console.log(`Error occured while connecting with MongoDB`);
  }
})();

server.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
