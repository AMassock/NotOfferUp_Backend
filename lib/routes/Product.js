import express from "express";
import bodyParser from "body-parser";
import Product from "../models/product.js";
import cors from "cors";

const product = express();
product.use(bodyParser.json());

product.use(cors());

const corsOptions = {
  origin: "http://localhost:3001/",
};

const configuredCors = cors(corsOptions);

product.options("*", configuredCors);

product.get("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const product = await Product.find({});
  res.json(product);
});

// creating new listing
product.post("/", configuredCors, async (req, res) => {
  //   res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req);
  const product = await Product.create(req.body);
  res.json(product);
});

//updating product listing
product.put("/:id", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(product);
});
//delete product listing
product.delete("/:id", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const product = await Product.findOneAndDelete(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(product);
});

export default product;
