import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";
import auth from "../Middleware/Auth.js";

const orderRoutes = express.Router();

orderRoutes.post(
  "/",
  auth,
  asyncHandler(async (req, res) => {
    let data = req.body;
    let responseData = {};

    if (data.orderItems && data.orderItems.length === 0) {
      await User.create(data);
      responseData.error = "No order items";
      res.status(400);
      return;
    } else {
      const order = new Order(data);

      const createOrder = await order.save();
      responseData.data = createOrder;
      res.status(201);
    }

    res.send(responseData);
  })
);

export default orderRoutes;
