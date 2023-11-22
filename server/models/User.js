import mongoose from "mongoose";
// import common from "../common/common.js";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// userSchema.pre("save"),
//   async (next) => {
//     const user = this;
//     try {
//       await common.commonService.encrypted(user.password);
//       next();
//     } catch (error) {
//       console.log(error);
//     }
//   };

const User = mongoose.model("User", userSchema);

export default User;

// unique: true

// require: true
