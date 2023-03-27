import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

const Product = new Schema({
  item: String,
  price: Number,
  description: String,
  image: String,
  posted_at: String,
  title: String,
});

export default mongoose.model("Product", Product);
