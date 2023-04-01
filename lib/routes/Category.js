import express from "express";
import Category from "../models/category.js";
import cors from "cors";

const category = express.Router();
category.use(cors());

const corsOptions = {
  "Access-Control-Allow-Origin": "*",
};

const configuredCors = cors(corsOptions);

category.options("*", configuredCors);

//get all categories
category.get("/", configuredCors, async (req, res) => {
  const category = await Category.find({});
  res.json(category);
});

//find by id
category.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.json(category);
});

//option to create new item
category.post("/", async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

export default category;
