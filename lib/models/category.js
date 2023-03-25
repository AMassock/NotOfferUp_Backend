import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

const Category = new Schema({
  title: String,
  products: String,
  tags: String,
});

export default mongoose.model("Category", Category);
