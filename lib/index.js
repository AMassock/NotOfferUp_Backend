import express from "express";
import category from "./routes/Category.js";
import product from "./routes/Product.js";
import cors from "cors";

const router = express();
router.use(express.json());
router.use(cors());

const corsOptions = {
  origin: "http://localhost:3001/",
};

const configuredCors = cors(corsOptions);

router.options("*", configuredCors);

router.get("/", (req, res) => {
  res.send("connected to local host 3000");
});

router.use("/category", category);
router.use("/product", product);

router.listen(3000, () => {
  console.log("listening on port 3000");
});

export default configuredCors;
