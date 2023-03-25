import categoryJsonData from "./category.json" assert {type:'json'}
import Category from "../models/category.js"
import productJsonData from "./product.json" assert {type:'json'}
import Product from "../models/product.js"

Product.insertMany(productJsonData); 
Category.insertMany(categoryJsonData); 