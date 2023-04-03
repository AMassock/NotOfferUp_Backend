import express from "express";
import bodyParser from "body-parser";
import Product from "../models/product.js";
import cors from "cors";

const product = express();
product.use(bodyParser.json());

product.use(cors());

// Configure CORS to allow Same-Site requests
const corsOptions = {
  "Access-Control-Allow-Origin": "*",
};

const configuredCors = cors(corsOptions);

product.options("*", configuredCors);

product.get("/", configuredCors, async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});

// creating new listing
product.post("/", configuredCors, async (req, res) => {
  console.log(req);
  const product = await Product.create(req.body);
  res.json(product);
});

//updating product listing
product.put("/:id", configuredCors, async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(product);
});
//delete product listing
product.delete("/:id", configuredCors, async (req, res) => {
  const product = await Product.findOneAndDelete(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(product);
});

export default product;
