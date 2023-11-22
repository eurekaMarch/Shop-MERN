import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const userRoutes = express.Router();

userRoutes.post(
  "/",
  asyncHandler(async (req, res) => {
    let data = req.body;
    let responseData = {};

    const checktUser = await User.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });

    if (checktUser === null) {
      await User.create(data);
      responseData.success = true;
      res.status(201);
    } else if (checktUser.username === data.username) {
      responseData.success = false;
      responseData.error = "user already exists";
      res.status(400);
    } else if (checktUser.email === data.email) {
      responseData.success = false;
      responseData.error = "email already exists";
      res.status(400);
    }

    res.send(responseData);
  })
);

export default userRoutes;
