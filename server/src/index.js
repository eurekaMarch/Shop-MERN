import express from "express";
import dotenv from "dotenv";
import connectDatabase from "../config/MongoDB.js";
import ImportData from "./DataImport.js";

dotenv.config();
connectDatabase();
const app = express();

app.use("/import", ImportData);

app.get("/", async (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
