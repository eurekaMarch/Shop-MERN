import connectDatabase from "../DB/MongoDB.js";
import User from "../models/user.js";

const register = async (req, res) => {
  await connectDatabase();

  let data = req.body;
  let responseData = {};
  console.log(data, "<<<< body");

  await User.insertMany(data)
    .then(() => {
      responseData.success = true;
    })
    .catch((error) => {
      console.log(error);
      responseData.success = false;
    });

  res.status(200).send(responseData);
};

export default register;
