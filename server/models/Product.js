import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true, default: 0 },
  description: { type: String, require: true },
  image: { type: String, require: true },
  stock: { type: Number, require: true, default: 0 },
});

const Product = mongoose.model("Product", userSchema);

export default Product;
