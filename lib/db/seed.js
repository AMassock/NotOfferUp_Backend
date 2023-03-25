import categoryJsonData from "./category.json" assert {type:'json'}
import Category from "../models/category.js"
Category.insertMany(categoryJsonData); 