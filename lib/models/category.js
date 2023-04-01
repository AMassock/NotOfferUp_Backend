import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

const Category = new Schema({
  title: String,
});

export default mongoose.model("Category", Category);
