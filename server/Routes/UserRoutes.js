import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import common from "../common/common.js";

const userRoutes = express.Router();

userRoutes.post(
  "/register",
  asyncHandler(async (req, res) => {
    let data = req.body;
    let responseData = {};

    const checktUser = await User.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });

    if (checktUser === null) {
      await User.create(data);
      res.status(201);
    } else if (checktUser.username === data.username) {
      responseData.error = "User already exists";
      res.status(400);
    } else if (checktUser.email === data.email) {
      responseData.error = "Email already exists";
      res.status(400);
    }

    res.send(responseData);
  })
);

userRoutes.post(
  "/login",
  asyncHandler(async (req, res) => {
    const data = req.body;
    const responseData = {};

    const checktUser = await User.findOne({ email: data.email });

    if (checktUser === null) {
      responseData.success = false;
      responseData.error = "user not found";
      res.status(401);
    } else {
      const decryptedPwd = await common.commonService.decrypted(
        checktUser.password
      );

      if (decryptedPwd == data.password) {
        const tokenObj = { _id: checktUser._id };

        responseData.success = true;
        responseData.data = {
          _id: checktUser._id,
          username: checktUser.username,
          email: checktUser.email,
          token: await common.commonService.generateToken(tokenObj),
          createdAt: checktUser.createdAt,
        };
      } else {
        responseData.success = false;
        responseData.error = "password invalid";
        res.status(401);
      }
    }

    res.send(responseData);
  })
);

export default userRoutes;
