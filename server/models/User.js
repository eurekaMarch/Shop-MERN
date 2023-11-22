import mongoose from "mongoose";
import common from "../common/common.js";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    this.password = await common.commonService.encrypted(this.password);
    next();
  } catch (error) {
    console.log(error);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
