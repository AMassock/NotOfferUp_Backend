import express from "express";
import category from "./routes/Category.js";
import product from "./routes/Product.js";

const router = express();
router.use(express.json());

router.get("/", (req, res) => {
  res.send("connected to local host 3000");
});

router.use("/category", category);
router.use("/product", product);

router.listen(3000, () => {
  console.log("listening on port 3000");
});
