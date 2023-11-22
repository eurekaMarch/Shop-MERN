import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDatabase from "./DB/MongoDB.js";
import ImportData from "./src/DataImport.js";
// import register from "./src/register.js";
import productRoutes from "./Routes/ProductRoutes.js";
import userRoutes from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Authorization, Content-Type, Accept, x-access-token, x-refresg-token, _id"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "x-access-token, x-refresg-token"
  );
  next();
});

app.use("/api/import", ImportData);

app.use("/api/products", productRoutes);

// app.use("/api/users", userRoutes);

app.get("/", async (req, res) => {
  res.send("API is running...");
});

// app.post("/register", async (req, res) => {
//   register(req, res);
// });

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
