import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User";

const userRoutes = express.Router();

userRoutes.post(
  "/",
  asyncHandler(async (req, res) => {
    let data = req.body;
    let responseData = {};
    try {
      const checktUser = await User.findOne({ username: data.username });
      if (checktUser === null) {
        await User.insertMany(data);
        responseData.success = true;
      } else if (checktUser.username === data.username) {
        responseData.success = false;
        responseData.error = "user already exists";
        throw new Error("user already exists");
      } else {
        await User.insertMany(data);
        responseData.success = true;
      }
    } catch (error) {
      console.log(error);
      responseData.success = false;
    }

    res.status(200).send(responseData);
  })
);

export default userRoutes;
