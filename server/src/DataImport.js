import express from "express";
import users from "../data/users.js";
import User from "../models/user.js";

const ImportData = express.Router();

ImportData.post("/user", async (req, res) => {
  await User.deleteMany({});
  const importUser = await User.insertMany(users);
  res.send({ importUser });
});

export default ImportData;
